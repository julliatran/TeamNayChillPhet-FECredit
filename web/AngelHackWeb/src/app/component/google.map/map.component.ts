import { Component } from '@angular/core';

@Component({
    selector: 'map-root',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {
    label: string = 'Hello';
    title: string = 'This is the title';
    lat: number = 10.796771;
    lng: number = 106.663658;


    clicked(clickEvent) {
        console.log(clickEvent);
    }
    styleFunc(feature) {
        return ({
            clickable: false,
            icon: feature.getProperty('icon'),
            strokeWeight: 1
        });
    }

    GeoJsonCustomer: Object = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    icon: {
                        url: 'assets/marker_customer.png',
                    }
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.67381286621094,
                        10.714586690981509
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    icon: {
                        url: 'assets/marker_customer.png'
                    }
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.67655944824219,
                        10.747981219652846
                    ]
                }
            }
        ]
    };


}
