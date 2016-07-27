import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoader, LazyMapsAPILoaderConfig, } from 'angular2-google-maps/core';

// let _config = new LazyMapsAPILoaderConfig();
// _config.apiKey = 'AIzaSyBANGnXi88eHt1LQU7hWtFwjF7TGWpkZyc';
// //_config.libraries = ['places'];
// let _loader = new LazyMapsAPILoader(_config);

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(
  MyApp,[
  GOOGLE_MAPS_PROVIDERS
  ]);
