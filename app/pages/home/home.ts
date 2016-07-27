import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {
  GoogleMapsAPIWrapper,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES,
  MapsAPILoader,
  LazyMapsAPILoaderConfig,
  MarkerManager,
  SebmGoogleMapMarker
} from 'angular2-google-maps/core';


@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [
    LazyMapsAPILoaderConfig,
    GOOGLE_MAPS_PROVIDERS,
    GoogleMapsAPIWrapper,
    MarkerManager
  ]
})
export class HomePage {
  title: string = 'My first angular2-google-maps project';
  marker: Marker = {
    lat: 51.678418,
    lng: 7.809007,
    label: ''
  };

  zoom: number = 20;
  label: string = 'A';
  apiKey: string = 'AIzaSyBANGnXi88eHt1LQU7hWtFwjF7TGWpkZyc';

  constructor(
    private navCtrl: NavController,
    private mapLoader: MapsAPILoader,
    private mapConfig: LazyMapsAPILoaderConfig,
    private gm: GoogleMapsAPIWrapper,
    private mm: MarkerManager
  ) {
    // console.log(mapLoader);
    mapConfig.apiKey = this.apiKey;

    console.log(gm);
    this.gm = gm;
    this.gm.setMapOptions(mapConfig);
    this.mm = mm;
  }
  test(): void {
    this.zoom--;
    this.gm.setZoom(this.zoom);
    console.log(this.zoom);
  }
  updateMarker(): void {
    this.marker = new Marker({
      'lat': 42.9523563,
      'lng': -78.8279639
    });
  }
}

export class Marker {
  lat: number;
  lng: number;
  label: string = 'A';

  constructor({ lat, lng, label = 'A'}) {
    this.lat = lat;
    this.lng = lng;
    this.label = lat;
  }
}