import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var google: any;

@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})

export class BranchesPage implements OnInit {

  @ViewChild('Map', { static: true }) mapElement: ElementRef;

  location = { lat: 35.123890, lng: 33.512 };
  map: any;
  mapOptions: any = {}; // TODO: Create an interface inside the models dir
  apiKey: any = environment.googleAPIKey;

  constructor() { }

  ngOnInit() {
    const script = document.createElement('script');
    script.id = 'googleMap';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    document.head.appendChild(script);
    this.mapOptions = {
      center: this.location,
      zoom: 4,
      mapTypeControl: false
    };
    setTimeout(() => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    }, 3000);
  }
}
