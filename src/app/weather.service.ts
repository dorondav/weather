import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { City } from './models/city.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // 3f38c2a67ef58306de9d61c7b485bcca api key
  city: City[] = [];
  private baseUrl = '127.0.0.1/backund';

  constructor(private http: HttpClient) {
  }
  getAll(city: City[]) {
    console.log(city);
  }
  // getAll(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/list`).pipe(
  //     map((res) => {
  //       this.city = res.data;
  //       return this.city;
  //     }),
  //     catchError(this.handleError));

  // }

  // return an observable with error message
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError('Error! something went wrong.');
  }
}
