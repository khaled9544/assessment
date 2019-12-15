import { Component } from '@angular/core';
import { Model, Brand } from 'src/model/data';
import { Brands } from 'src/constants/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  brands: Array<Brand> = Brands;

  constructor() {}

}
