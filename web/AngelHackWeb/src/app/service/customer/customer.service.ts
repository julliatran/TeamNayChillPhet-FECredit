import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: Http) {
    console.log('test service');
  }

  getListUserTier2() {
    return this.http.get('http://localhost:3000/potentialcustomer/getpotentialcustomertier2');
    // return [this.userQuy, this.userUyen, this.userKhoa, this.userDuc];
  }
  getListUserTIer2Sample() {
    return [this.userQuy, this.userUyen, this.userKhoa, this.userDuc];
  }
  getListUserTier1() {
    return this.http.get('http://localhost:3000/potentialcustomer/getpotentialcustomertier1');
    // return [this.userQuy, this.userUyen, this.userKhoa, this.userDuc];
  }
  userQuy = {
    "id": "00001",
    "fullname": "Ha Kim Quy",
    "SSID": "214536754",
    "income": 8000000,
    "email": "changcodon@gmail.com",
    "age": 22,
    "isMale": true,
    "phoneNumber": "0163664250",
    "workingAddress": "772 Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Hồ Chí Minh",
    "workingLocation": {
      type: "Point",
      coordinates: [10.795305, 106.721751]
    },
    "suggestCustomerNeed": ["Smartphone", "Motorbyke", "Laptop"],
    "career": "IT",
    "homeAddress": "18 Cay Tram, Go Vap, Tp HCM",
    "homeLocation": {
      type: "Point",
      coordinates: [10.842650, 106.656131]
    },
    "socialNetwork": {
      "Facebook": "https://www.facebook.com/hakim.quy"
    },
    "feCredit": []
  };
  userUyen = {
    "id": "00002",
    "fullname": "Trần Uyên",
    "SSID": "211254354",
    "income": 9000000,
    "email": "nangcodon@gmail.com",
    "age": 22,
    "isMale": false,
    "phoneNumber": "0163664250",
    "workingAddress": "Landmark 81, Tp HCM",
    "workingLocation": {
      type: "Point",
      coordinates: [10.795058, 106.722083]
    },
    "suggestCustomerNeed": ["Smartphone", "Motorbyke", "Laptop"],
    "career": "IT",
    "homeAddress": "38 Le Tan Quoc, Tan Binh, Tp HCM",
    "homeLocation": {
      type: "Point",
      coordinates: [10.842697, 106.656181]
    },
    "socialNetwork": {
      "Facebook": "https://www.facebook.com/hakim.quy"
    },
    "feCredit": [
      {
        "name": "Iphone X",
        "type": "smartphone",
        "price": "25000000",
        "yearRelease": 2017
      }
    ]
  };
  userKhoa = {
    "id": "00003",
    "fullname": "Phạm Khoa",
    "SSID": "211254354",
    "income": 25000000,
    "email": "changdeptrai@gmail.com",
    "age": 22,
    "isMale": false,
    "phoneNumber": "0163664250",
    "workingAddress": "Etown2, Tan Binh, Tp HCM",
    "workingLocation": {
      type: "Point",
      coordinates: [10.802416, 106.639503]
    },
    "suggestCustomerNeed": ["Motorbyke", "Smartphone"],
    "career": "Sale",
    "homeAddress": "38 Le Tan Quoc, Tan Binh, Tp HCM",
    "homeLocation": {
      type: "Point",
      coordinates: [10.842697, 106.656181]
    },
    "socialNetwork": {
      "Facebook": "https://www.facebook.com/hakim.quy"
    },
    "feCredit": []
  };
  userDuc = {
    "id": "00004",
    "fullname": "Ngô Minh Đức",
    "SSID": "211254354",
    "income": 18000000,
    "email": "changkute@gmail.com",
    "age": 22,
    "isMale": false,
    "phoneNumber": "0163664250",
    "workingAddress": "Techcombank Tan Cang, Tp HCM",
    "workingLocation": {
      type: "Point",
      coordinates: [10.793650, 106.721323]
    },
    "suggestCustomerNeed": ["Motorbyke", "Smartphone"],
    "career": "Sale",
    "homeAddress": "38 Le Tan Quoc, Tan Binh, Tp HCM",
    "homeLocation": {
      type: "Point",
      coordinates: [10.842697, 106.656181]
    },
    "socialNetwork": {
      "Facebook": "https://www.facebook.com/hakim.quy"
    },
    "feCredit": []
  };


}
