import { Component, OnInit, ViewChild, ElementRef, ɵConsole } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';
import { Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})

export class BranchesPage implements OnInit {

  currentPosition: Geoposition;
  branchesPosition: Array<any> = [];
  
  constructor(
    private nativeService: NativeService
  ) { }

  ngOnInit() { 
    this.fetchCurrentPosition();
  }

  async fetchCurrentPosition() {
    try {
      // TODO: Check if the location has been allowed! then display an alert or do a back kick
      this.currentPosition = await this.nativeService.CurrentLocation;
      // console.log(this.currentPosition);
    } catch (exception) {
      // TODO: Display an alert
      console.log(JSON.stringify(exception, null, 2));
    }
  }

}
