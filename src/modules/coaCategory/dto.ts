export interface CoACategoryDto {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateCoACategoryDto {
  name: string
}

export interface UpdateCoACategoryDto {
  name: string
}

export interface CoACategoryQueryFilterDto {
  name: string
}
