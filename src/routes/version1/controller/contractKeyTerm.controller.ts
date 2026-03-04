import { ContractKeyTermService } from '@/modules/contractKeyTerm/service/contractKeyTermService'
import {
  createContractKeyTermSchema,
  updateContractKeyTermSchema,
} from '@/modules/contractKeyTerm/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new ContractKeyTermService()

export const ContractKeyTermController = createCrudController({
  service,
  createSchema: createContractKeyTermSchema,
  updateSchema: updateContractKeyTermSchema,
})
