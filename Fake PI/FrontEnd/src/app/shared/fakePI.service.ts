import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://fakepi-nodejs.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FakePIService {

  constructor(private http: HttpClient) { }


  getSettings(): Observable<any> {
    return this.http.get(baseUrl+ 'settings');
  }

  newTemperature(data: any): Observable<any> {
    return this.http.post(baseUrl+ 'temperature', data);
  }

  newHumidity(data: any): Observable<any> {
    return this.http.post(baseUrl+ 'humidity', data);
  }

}
