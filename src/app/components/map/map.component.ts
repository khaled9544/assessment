import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('Map', { static: true }) mapElement: ElementRef;

  location = { lat: 35.123890, lng: 33.512 }; // TODO Get the coordinates using the native plugin
  map: any;
  mapOptions: any = {}; // TODO: Create an interface inside the models dir
  apiKey: any = environment.googleAPIKey;
  markerOptions: any = { position: null, map: null, title: null };
  marker: any;

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
      this.markerOptions.position = this.location;
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'My Location';
      this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
  }

}
