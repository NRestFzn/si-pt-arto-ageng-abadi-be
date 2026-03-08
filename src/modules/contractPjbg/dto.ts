export interface ContractPjbgDto {
  id: string
  contract_number?: string
  customer_id: string
  duration?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateContractPjbgDto {
  customer_id: string
  contract_number?: string
  duration?: string
}

export type UpdateContractPjbgDto = Partial<CreateContractPjbgDto>


export interface ContractPjbgQueryFilterDto extends Partial<CreateContractPjbgDto> {}
