import { Request } from 'express'
import AccountingJournal from '@/database/model/accountingJournal'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import {
  AccountingJournalDto,
  CreateAccountingJournalDto,
  UpdateAccountingJournalDto,
} from '../dto'
import { AccountingJournalRepository } from '../repository/accountingJournalRepository'

export class AccountingJournalService {
  constructor(
    private readonly repository = new AccountingJournalRepository()
  ) {}

  async getAll(req: Request): Promise<{
    data: AccountingJournalDto[]
    meta: { pagination: MetaPaginationDto }
  }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<AccountingJournal> {
    return this.repository.getByPk(id)
  }

  async add(formData: CreateAccountingJournalDto): Promise<AccountingJournal> {
    return this.repository.add(formData)
  }

  async update(
    id: string,
    formData: UpdateAccountingJournalDto
  ): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
