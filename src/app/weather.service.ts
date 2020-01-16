import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { City } from './models/city.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

//  Dev Environment Params
const BACKEND_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // 3f38c2a67ef58306de9d61c7b485bcca api key
  city: City[] = [];

  constructor(private http: HttpClient) {
  }
  test = 'e4b8b08c185638b825af37facfe1fabb';
  url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  getCurrentWeather(city) {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('appId', this.test);
    return this.http.get(this.url + city, { params });
  }

}
