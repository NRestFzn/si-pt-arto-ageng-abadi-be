import { Request } from 'express'
import AccountingCoA from '@/database/model/accountingCoA'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import { AccountingCoAQueryRepository } from './accountingCoAQueryRepository'
import {
  CreateAccountingCoADto,
  AccountingCoADto,
  UpdateAccountingCoADto,
} from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import CoACategory from '@/database/model/coaCategory'

export class AccountingCoARepository {
  async getAll(req: Request): Promise<{
    data: AccountingCoADto[]
    meta: { pagination: MetaPaginationDto }
  }> {
    const query = new AccountingCoAQueryRepository(req)

    const data = await AccountingCoA.findAll({
      ...query.queryFilter(),
      include: [{ model: CoACategory }],
    })
    const dataCount = await AccountingCoA.count()

    return {
      data,
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

  async getByPk(id: string): Promise<AccountingCoA> {
    const data = await AccountingCoA.findByPk(id, {
      include: [{ model: CoACategory }],
    })

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async add(formData: CreateAccountingCoADto): Promise<AccountingCoADto> {
    let data: any

    await db.sequelize!.transaction(async (transaction) => {
      data = await AccountingCoA.create({ ...formData }, { transaction })
    })

    return data
  }

  async update(id: string, formData: UpdateAccountingCoADto): Promise<void> {
    const data = await this.getByPk(id)

    await db.sequelize!.transaction(async (transaction) => {
      await data.update({ ...formData }, { transaction })
    })
  }

  async delete(id: string): Promise<void> {
    const data = await this.getByPk(id)

    await data.destroy()
  }
}
