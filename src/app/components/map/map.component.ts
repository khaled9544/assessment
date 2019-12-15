import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Location } from 'src/model/data';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('Map', { static: true }) mapElement: ElementRef;
  @Input() currentLocation: Geoposition;
  @Input() branchesPosition: Array<Location>;

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
      const mapOptions = {
        center: location,
        zoom: 14,
        mapTypeControl: false
      };
      const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addCenterMarker(location, map);
      this.addBranchesMarker(map);
    }, 3000);
  }

  addCenterMarker(position, map) {
    const markerOptions = { title: 'My Location', position, map };
    const infowindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker(markerOptions);
    this.displayInfoWindowEvent(map, infowindow, 'My Location', marker);
  }

  addBranchesMarker(map) {
    let i: number;
    for (i = 0; i < this.branchesPosition.length; i++) {
      const branch: Location = this.branchesPosition[i];
      const markerOptions = {
        title: branch.address || '',
        position: { lat: branch.coordinates[0], lng: branch.coordinates[1] },
        map
      };
      const infowindow = new google.maps.InfoWindow();
      const marker = new google.maps.Marker(markerOptions);
      this.displayInfoWindowEvent(map, infowindow, branch.branchName, marker);
    }
  }

  displayInfoWindowEvent(map, infowindow, content, marker) {
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(content);
      infowindow.open(map, marker);
    });
  }



}
