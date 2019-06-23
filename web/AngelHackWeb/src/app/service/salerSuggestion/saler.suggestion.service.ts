import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SalerSuggestionService {

  constructor(private http: Http) {
    console.log('test service');
  }

  getListSalerTier1() {
    return [this.saler1, this.saler2];
  }

  saler1 = {};
  saler2 = {};


}
