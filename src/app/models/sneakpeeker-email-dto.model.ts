export interface SneakPeekerEmailDto {
  email: string;
  criteria: SneakPeekerCriteriaDto;
}

export interface SneakPeekerCriteriaDto {
  KEYWORD: CriteriaDto;
  PRICE: CriteriaDto;
}

export interface CriteriaDto {
  active: boolean;
  fields?: string[];
  min?: number;
  max?: number;
}
