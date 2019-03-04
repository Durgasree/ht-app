import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uri = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }

  addUser(userObj) {
    console.log(userObj);
    this.http.post('${this.uri}/home', userObj)
        .subscribe(res => console.log('Done'));
  }
}
