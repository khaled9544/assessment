import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/model/data';

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

  constructor(
    private nativeService: NativeService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchCurrentPosition();
    this.fetchBranches();
  };

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
  }

}
