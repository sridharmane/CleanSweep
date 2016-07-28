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
// import {MapOptions} from 'angular2-google-maps/core/services/google-maps-types';


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

  city:string = 'Buffalo';
  // postalCode:number = 14215;
  countryCode:string = 'US';
  requiredComponents =[
    "street_number",//house number
    "route",//street
    "locality",//city
    "administrative_area_level_1", //State
    "country",
    "postal_code"
  ];
  mapData:any = {
    'address_components' : [
      {
        'long_name' : '37',
        'short_name' : '37',
        'types' : [ 'street_number' ]
      },
      {
        'long_name' : 'Tyler Street',
        'short_name' : 'Tyler St',
        'types' : [ 'route' ]
      },
      {
        'long_name' : 'University',
        'short_name' : 'University',
        'types' : [ 'neighborhood', 'political' ]
      },
      {
        'long_name' : 'Buffalo',
        'short_name' : 'Buffalo',
        'types' : [ 'locality', 'political' ]
      },
      {
        'long_name' : 'Erie County',
        'short_name' : 'Erie County',
        'types' : [ 'administrative_area_level_2', 'political' ]
      },
      {
        'long_name' : 'New York',
        'short_name' : 'NY',
        'types' : [ 'administrative_area_level_1', 'political' ]
      },
      {
        'long_name' : 'United States',
        'short_name' : 'US',
        'types' : [ 'country', 'political' ]
      },
      {
        'long_name' : '14214',
        'short_name' : '14214',
        'types' : [ 'postal_code' ]
      },
      {
        'long_name' : '1112',
        'short_name' : '1112',
        'types' : [ 'postal_code_suffix' ]
      }
    ],
    'formatted_address' : '37 Tyler St, Buffalo, NY 14214, USA',
    'geometry' : {
      'bounds' : {
        'northeast' : {
          'lat' : 42.9524324,
          'lng' : -78.82787359999999
        },
        'southwest' : {
          'lat' : 42.9522803,
          'lng' : -78.82805429999999
        }
      },
      'location' : {
        'lat' : 42.9523563,
        'lng' : -78.8279639
      },
      'location_type' : 'ROOFTOP',
      'viewport' : {
        'northeast' : {
          'lat' : 42.9537053302915,
          'lng' : -78.82661496970849
        },
        'southwest' : {
          'lat' : 42.95100736970851,
          'lng' : -78.82931293029151
        }
      }
    },
    'place_id' : 'ChIJKXpVP6Ny04kREkIH8MdLl7I',
    'types' : [ 'premise' ]
  };
  streetAddresses:any =[
    {
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },
    {
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    },{
      address:'26 affinity ln, buffalo, ny'
    },
    {
      address:'34 merrimac st, buffalo, ny'
    },
    {
      address:'37 tyler st, buffalo, ny'
    }
  ];

  zoom: number = 20;
  label: string = 'A';
  apiKey: string = 'AIzaSyBANGnXi88eHt1LQU7hWtFwjF7TGWpkZyc';

  constructor(
    private navCtrl: NavController,
    private mapLoader: MapsAPILoader,
    private mapConfig: LazyMapsAPILoaderConfig,
    private gm: GoogleMapsAPIWrapper
    // private mm: MarkerManager,
    // private mo : MapOptions
  ) {
    // console.log(mapLoader);
    this.mapConfig.apiKey = this.apiKey;
    // this.mo.zoom = 9;
    // this.mo.zoomControl = false;
    //
    // // this.mo.scaleControl = false;
    // this.mo.streetViewControl = false;

    console.log(gm);
    this.gm = gm;
    this.gm.setMapOptions(mapConfig);
    // this.gm.setMapOptions(mo)
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
  getGeocodeUrl(address):string{
    let safeAddress:string = address.split(' ').join('+');
    // console.log(safeAddress);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${safeAddress}&components=country:${this.countryCode}&key=${this.apiKey}`;
    // console.log(url);
    return url;
  }
  extractAddressComponents(addressComponents:Array<any>,componentNames:Array<string>):any{
    let extractedData = {};
    addressComponents.forEach((ac)=>{
      componentNames.forEach((cName)=>{
        if(ac.types.indexOf(cName) === 0){
          extractedData[cName] = ac.short_name;
        }
      })
    });
    // console.log(extractedData);
    return extractedData;
  }
  extractLocation(geometry:any):any{
    return geometry.location
  }
  getMapData(mapResult):any{
    let mapData = {};
    Object.assign(mapData,this.extractAddressComponents(mapResult.address_components,this.requiredComponents));
    // console.log(mapData);
    Object.assign(mapData,this.extractLocation(mapResult.geometry));
    console.log(mapData);
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
