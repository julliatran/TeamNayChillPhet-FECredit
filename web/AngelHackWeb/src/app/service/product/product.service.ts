import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: Http) {
    }
    getProductCategory() {
        return this.productCategory;
    }
    getSmartphoneList() {
        return this.smartphoneList;
    }
    getMotorbikeList() {
        return this.motorBikeList;
    }

    productCategory = ["Motorbike", "Smartphone"];
    smartphoneList = [
        {
            "Id": "S001",
            "Name":"Apple Iphone X",
            "Price": 22050000,
            "image": "../../../assets/iphonex.jpg"
        },{
            "Id": "S002",
            "Name":"Samsung Galaxy A9",
            "Price": 12490000,
            "image": "../../../assets/samsunga9.jpg"
        },{
            "Id": "S003",
            "Name":"Oppo A3s",
            "Price": 4690000,
            "image": "../../../assets/oppoa3s.jpg"
        },{
            "Id": "S004",
            "Name":"Xiaomi Mi 5",
            "Price": 5590000,
            "image": "../../../assets/xiaomi5.jpg"
        },{
            "Id": "S005",
            "Name":"Apple Iphone 7 Plus",
            "Price": 17000000,
            "image": "../../../assets/iphone7plus.jpg"
        },{
            "Id": "S006",
            "Name":"Sony Xperia XA",
            "Price": 3590000,
            "image": "../../../assets/xperiaxa.jpg"
        },{
            "Id": "S007",
            "Name":"Huawei GR5",
            "Price": 4490000,
            "image": "../../../assets/gr5.png"
        },{
            "Id": "S008",
            "Name":"Lenovo A328",
            "Price": 1990000,
            "image": "../../../assets/a328.jpg"
        },{
            "Id": "S009",
            "Name":"Apple Iphone XS Max",
            "Price": 44000000,
            "image": "../../../assets/iphonexsmax.jpg"
        },{
            "Id": "S010",
            "Name":"Nokia 130",
            "Price": 519000,
            "image": "../../../assets/nokia130.jpeg"
        },{
            "Id": "S011",
            "Name":"Masstel Fami 12",
            "Price": 490000,
            "image": "../../../assets/masstel.jpg"
        },{
            "Id": "S012",
            "Name":"HTC U12 Plus",
            "Price": 30302000,
            "image": "../../../assets/htc.jpg"
        }
    
    ];


    motorBikeList = [
        {
            "Id": "M001",
            "Name":"Honda Vision 2019",
            "Price": 31770000,
            "image": "../../../assets/honda_vision2019.jpg"
        },{
            "Id": "M002",
            "Name":"Honda Lead 2018",
            "Price": 36540000,
            "image": "../../../assets/honda_lead2018.jpg"
        },{
            "Id": "M003",
            "Name":"Honda Wave Alpha 2019",
            "Price": 18000000,
            "image": "../../../assets/honda_wave_alpha2019.jpg"
        },{
            "Id": "M004",
            "Name":"Honda Air Blade 2019",
            "Price": 38800000,
            "image": "../../../assets/honda_air_blade2019.jpg"
        },{
            "Id": "M005",
            "Name":"Sirius FI",
            "Price": 20340000,
            "image": "../../../assets/sirius_fi.jpg"
        },{
            "Id": "M006",
            "Name":"Honda RSX FI",
            "Price": 23200000,
            "image": "../../../assets/honda_rsx_fi.jpg"
        },{
            "Id": "M007",
            "Name":"Honda Blade 2018",
            "Price": 19300000,
            "image": "../../../assets/honda_blade2018.jpg"
        },{
            "Id": "M008",
            "Name":"Honda Vario 125",
            "Price": 41500000,
            "image": "../../../assets/honda_vario125.jpg"
        },{
            "Id": "M009",
            "Name":"Honda SH 150i CBS 2019",
            "Price": 99490000,
            "image": "../../../assets/honda_sh_150i.jpg"
        },{
            "Id": "M010",
            "Name":"Honda Sonic 150r",
            "Price": 62000000,
            "image": "../../../assets/honda_sonic_150r.jpg"
        },{
            "Id": "M011",
            "Name":"Honda CRF 150L",
            "Price": 73500000,
            "image": "../../../assets/honda_CRF_150L.jpg"
        },{
            "Id": "M012",
            "Name":"Honda Vario 150",
            "Price": 54200000,
            "image": "../../../assets/honda_vario_150.jpg"
        }
    
    ]
    
    
    electronicCategory = [""]
}