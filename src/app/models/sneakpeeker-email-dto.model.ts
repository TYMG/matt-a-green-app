export interface SneakPeekerEmailDto {
  email: string;
  criteria: {
    keywords: string[];
    max_price: number;
    min_price: number;
  };
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
