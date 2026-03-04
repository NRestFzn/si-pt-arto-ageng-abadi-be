import { ContractPjbgService } from '@/modules/contractPjbg/service/contractPjbgService'
import {
  createContractPjbgSchema,
  updateContractPjbgSchema,
} from '@/modules/contractPjbg/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new ContractPjbgService()

export const ContractPjbgController = createCrudController({
  service,
  createSchema: createContractPjbgSchema,
  updateSchema: updateContractPjbgSchema,
})
