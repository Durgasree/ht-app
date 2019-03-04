import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Response, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('http://localhost:3000/products.json',{})
  }


}
