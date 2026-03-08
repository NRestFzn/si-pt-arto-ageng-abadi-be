import { Request } from 'express'
import { DashboardSummaryDto } from '../dto'
import { DashboardRepository } from '../repository/dashboardRepository'

export class DashboardService {
  constructor(private readonly repository = new DashboardRepository()) {}

  async getSummary(req: Request): Promise<DashboardSummaryDto> {
    return this.repository.getSummary(req)
  }
}
