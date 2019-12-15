import { Injectable } from '@angular/core';
import { Brand, Model, Location } from 'src/model/data';
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

  getBrandModels = (id: string): Array<Model> => {
    const brand: Brand = this.brands.find((brand: Brand) => brand.id === id);
    return brand.models;
  }
  
  getBranches = (brandId: string, modelId: string): Array<Location> => {
    // It might be an other way to provide double find in order to improve the complexity
    const brand: Brand = this.brands.find((brand: Brand) => brand.id === brandId);
    const model: Model = brand.models.find((model:Model) => model.id === modelId);
    return model.branches;
  } 

}
