import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/model/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {

  brandId: string;
  models: Array<Model> = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.brandId = this.activatedRoute.snapshot.paramMap.get('brandId');
    this.models = this.dataService.getBrandModels(this.brandId);
  }

}
