export interface Data {
  id: string;
  name: string;
  img: string;
  type: string;
  author: string;
  year: string;
  color: string;
  secondColor: string;
  quantity: string;
  popularity: string;
  price: string;
}

export enum SortEnum {
  default = "default",
  name_low = "name_low",
  name_high = "name_high",
  price_low = "price_low",
  price_high = "price_high",
  year_low = "year_low",
  year_high = "year_high",
}
