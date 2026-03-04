import Supplier from '@/database/model/supplier'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateSupplierDto, UpdateSupplierDto } from '../dto'
import { SupplierRepository } from '../repository/supplierRepository'

export class SupplierService extends CrudService<
  Supplier,
  CreateSupplierDto,
  UpdateSupplierDto
> {
  constructor(private readonly supplierRepository = new SupplierRepository()) {
    super(supplierRepository)
  }
}
