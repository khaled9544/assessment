import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('Map', { static: true }) mapElement: ElementRef;
  @Input() currentLocation: Geoposition;

  apiKey: any = environment.googleAPIKey;

  constructor(
    public platform: Platform
  ) { }

  ngOnChanges(changes) {
    const isFirstChange: boolean = changes.currentLocation.firstChange;
    if (isFirstChange) {
      return;
    }
    const location = { lat: this.currentLocation.coords.latitude, lng: this.currentLocation.coords.longitude };
    this.loadGoogleMap(location);
  }

  ngOnInit() {
    const script = document.createElement('script');
    script.id = 'googleMap';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    document.head.appendChild(script);
  }

  loadGoogleMap(location) {
    setTimeout(() => {
      const markerOptions = { title: null, position: null, map: null };
      const mapOptions = {
        center: location,
        zoom: 14,
        mapTypeControl: false
      };
      const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      markerOptions.position = location;
      markerOptions.map = map;
      markerOptions.title = 'My Location';
      new google.maps.Marker(markerOptions);
    }, 3000);
  }

}
