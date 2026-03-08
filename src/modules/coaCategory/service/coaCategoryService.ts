import { Request } from 'express'
import {
  CreateCoACategoryDto,
  CoACategoryDto,
  UpdateCoACategoryDto,
} from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import CoACategory from '@/database/model/coaCategory'
import { CoACategoryRepository } from '../repository/coaCategoryRepository'

export class CoACategoryService {
  constructor(private readonly repository = new CoACategoryRepository()) {}

  async getAll(
    req: Request
  ): Promise<{
    data: CoACategoryDto[]
    meta: { pagination: MetaPaginationDto }
  }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<CoACategory> {
    return this.repository.getByPk(id)
  }

  async add(formData: CreateCoACategoryDto): Promise<CoACategoryDto> {
    return this.repository.add(formData)
  }

  async update(id: string, formData: UpdateCoACategoryDto): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
