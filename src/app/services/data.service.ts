import { Injectable } from '@angular/core';
import { Brand } from 'src/model/data';
import { Brands } from 'src/constants/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private brands: Array<Brand> = Brands;
  
  constructor() { }

  get Brands(): Array<Brand> {
    return this.brands;
  }

  getBrandModels = (id: string) => {
    const brand: Brand = this.brands.find((brand: Brand) => brand.id === id);
    return brand.models;
  }
}
