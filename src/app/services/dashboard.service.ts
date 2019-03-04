import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  uri = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getHomepage(){
    return this._http.get('http://localhost:3000/home',{})
  }


}
