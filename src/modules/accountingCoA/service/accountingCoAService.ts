import { Request } from 'express'
import {
  CreateAccountingCoADto,
  AccountingCoADto,
  UpdateAccountingCoADto,
} from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import AccountingCoA from '@/database/model/coaCategory'
import { AccountingCoARepository } from '../repository/accountingCoARepository'

export class AccountingCoAService {
  constructor(private readonly repository = new AccountingCoARepository()) {}

  async getAll(req: Request): Promise<{
    data: AccountingCoADto[]
    meta: { pagination: MetaPaginationDto }
  }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<AccountingCoA> {
    return this.repository.getByPk(id)
  }

  async add(formData: CreateAccountingCoADto): Promise<AccountingCoADto> {
    return this.repository.add(formData)
  }

  async update(id: string, formData: UpdateAccountingCoADto): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
