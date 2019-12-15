import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/model/data';
import { DataService } from '../services/data.service';
// import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // applicationRouter = new AppRoutingModule();
  brands: Array<Brand> = [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    // this.brands = this.dataService.Brands;
  }

}
