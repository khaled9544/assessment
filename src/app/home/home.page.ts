import { Component } from '@angular/core';
import { Car } from 'src/model/data';
import { Cars } from 'src/constants/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cars: Array<Car> = Cars;

  constructor() {}

}
