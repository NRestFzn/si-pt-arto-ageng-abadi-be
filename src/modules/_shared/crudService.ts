import { Request } from 'express'
import { Model } from 'sequelize'
import { CrudRepository } from './crudRepository'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'

export class CrudService<
  TModel extends Model,
  TCreate extends object,
  TUpdate extends object,
> {
  constructor(
    protected readonly repository: CrudRepository<TModel, TCreate, TUpdate>
  ) {}

  async getAll(
    req: Request
  ): Promise<{ data: TModel[]; meta: { pagination: MetaPaginationDto } }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<TModel> {
    return this.repository.getByPk(id)
  }

  async add(formData: TCreate): Promise<TModel> {
    return this.repository.add(formData)
  }

  async update(id: string, formData: TUpdate): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
