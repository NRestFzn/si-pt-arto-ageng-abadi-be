import { Request } from 'express'
import { IncomeStatementDto } from '../dto'
import { AccountingRepository } from '../repository/accountingRepository'

export class AccountingService {
  constructor(private readonly repository = new AccountingRepository()) {}

  async getIncomeStatement(req: Request): Promise<IncomeStatementDto> {
    return this.repository.getIncomeStatement(req)
  }
}
