import Supplier from '@/database/model/supplier'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateSupplierDto, UpdateSupplierDto } from '../dto'

export class SupplierRepository extends CrudRepository<
  Supplier,
  CreateSupplierDto,
  UpdateSupplierDto
> {
  constructor() {
    super(Supplier)
  }
}
