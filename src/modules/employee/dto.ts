export interface EmployeeDto {
  id: string
  name: string
  nik?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateEmployeeDto {
  name: string
  nik?: string
}

export type UpdateEmployeeDto = Partial<CreateEmployeeDto>


export interface EmployeeQueryFilterDto extends Partial<CreateEmployeeDto> {}
