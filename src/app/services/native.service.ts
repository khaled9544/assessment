import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  constructor(private geolocation: Geolocation) { }

  get CurrentLocation(): Promise<Geoposition> {
    return this.geolocation.getCurrentPosition();
  }
}
