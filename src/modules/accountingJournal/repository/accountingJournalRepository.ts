import { Request } from 'express'
import { Op } from 'sequelize'
import AccountingJournal from '@/database/model/accountingJournal'
import AccountingJournalEntry from '@/database/model/accountingJournalEntry'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import {
  AccountingJournalDto,
  CreateAccountingJournalDto,
  UpdateAccountingJournalDto,
} from '../dto'
import { AccountingJournalQueryRepository } from './accountingJournalQueryRepository'

export class AccountingJournalRepository {
  async getAll(req: Request): Promise<{
    data: AccountingJournalDto[]
    meta: { pagination: MetaPaginationDto }
  }> {
    const query = new AccountingJournalQueryRepository(req)
    const filter = query.queryFilter()

    const data = await AccountingJournal.findAll({
      ...filter,
      include: [{ model: AccountingJournalEntry }],
    })

    const dataCount = await AccountingJournal.count({
      where: filter.where,
    })

    return {
      data: data as unknown as AccountingJournalDto[],
      meta: {
        pagination: {
          page: query.page,
          pageSize: query.pageSize,
          pageCount: data.length,
          total: dataCount,
        },
      },
    }
  }

  async getByPk(id: string): Promise<AccountingJournal> {
    const data = await AccountingJournal.findByPk(id, {
      include: [{ model: AccountingJournalEntry }],
    })

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async add(formData: CreateAccountingJournalDto): Promise<AccountingJournal> {
    let data: AccountingJournal

    await db.sequelize!.transaction(async (transaction) => {
      data = await AccountingJournal.create(
        {
          transaction_date: formData.transaction_date,
          description: formData.description,
          source_module: formData.source_module,
        },
        { transaction }
      )

      const journalEntries = formData.entries.map((entry) => ({
        accounting_journal_id: data.id,
        account_code: entry.account_code,
        debit: entry.debit,
        credit: entry.credit,
      }))

      await AccountingJournalEntry.bulkCreate(journalEntries, { transaction })
    })

    return this.getByPk(data!.id)
  }

  async update(
    id: string,
    formData: UpdateAccountingJournalDto
  ): Promise<void> {
    const data = await this.getByPk(id)

    await db.sequelize!.transaction(async (transaction) => {
      await data.update({ ...formData, transaction })

      if (formData.entries?.length) {
        const journalEntries = formData?.entries.map((entry) => ({
          accounting_journal_id: data.id,
          account_code: entry.account_code,
          debit: entry.debit,
          credit: entry.credit,
        }))

        await AccountingJournalEntry.bulkCreate(journalEntries, { transaction })
      }

      if (formData.removed_entry_ids?.length) {
        await AccountingJournalEntry.destroy({
          where: {
            id: {
              [Op.in]: formData.removed_entry_ids,
            },
            accounting_journal_id: id,
          },
          transaction,
        })
      }
    })
  }

  async delete(id: string): Promise<void> {
    const data = await this.getByPk(id)

    await data.destroy()
  }
}
