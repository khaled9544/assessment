import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/model/data';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})

export class BranchesPage implements OnInit {

  currentPosition: Geoposition;
  branchesPosition: Array<Location> = [];
  brandId: string;
  modelId: string;
  loader: any;

  constructor(
    private nativeService: NativeService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading();
    this.fetchCurrentPosition();
    this.fetchBranches();
  };

  ionViewWillLeave() {
    this.dismissLoader();
  }

  onMapLoaded() {
    this.dismissLoader();
  }
  
  fetchBranches() {
    this.brandId = this.activatedRoute.snapshot.paramMap.get('brandId');
    this.modelId = this.activatedRoute.snapshot.paramMap.get('modelId');
    this.branchesPosition = this.dataService.getBranches(this.brandId, this.modelId);
  };

  async fetchCurrentPosition() {
    try {
      // TODO: Check if the location has been allowed! then display an alert or do a back kick
      this.currentPosition = await this.nativeService.CurrentLocation;
    } catch (exception) {
      // TODO: Display an alert
      console.log(JSON.stringify(exception, null, 2));
    }
  };

  async dismissLoader() { 
    await this.loader.dismiss();
  }
  
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Initializing map...'
    });
    await this.loader.present()
  }

}
