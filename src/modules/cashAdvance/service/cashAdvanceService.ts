import CashAdvance from '@/database/model/cashAdvance'
import { CrudService } from '@/modules/_shared/crudService'
import {
  ApproveCashAdvanceDto,
  CreateCashAdvanceDto,
  RejectCashAdvanceDto,
  UpdateCashAdvanceDto,
} from '../dto'
import { CashAdvanceRepository } from '../repository/cashAdvanceRepository'

export class CashAdvanceService extends CrudService<
  CashAdvance,
  CreateCashAdvanceDto,
  UpdateCashAdvanceDto
> {
  constructor(
    private readonly cashAdvanceRepository = new CashAdvanceRepository()
  ) {
    super(cashAdvanceRepository)
  }

  async approve(
    id: string,
    formData: ApproveCashAdvanceDto
  ): Promise<CashAdvance> {
    const data = await this.cashAdvanceRepository.getByPk(id)

    const chunks = [data.description, '[APPROVED]']

    if (formData.note) {
      chunks.push(`note: ${formData.note}`)
    }

    await this.cashAdvanceRepository.update(id, {
      description: chunks.filter(Boolean).join(' | '),
    })

    return this.cashAdvanceRepository.getByPk(id)
  }

  async reject(
    id: string,
    formData: RejectCashAdvanceDto
  ): Promise<CashAdvance> {
    const data = await this.cashAdvanceRepository.getByPk(id)

    const chunks = [
      data.description,
      '[REJECTED]',
      `reason: ${formData.reason}`,
    ]

    await this.cashAdvanceRepository.update(id, {
      description: chunks.filter(Boolean).join(' | '),
    })

    return this.cashAdvanceRepository.getByPk(id)
  }
}
