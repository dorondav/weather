import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: City[];
  title = 'weather';
  error = '';
  success = '';
  constructor(private weatherService: WeatherService) {

  }
  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    // this.weatherService.getAll()
    //   .subscribe((res: City[]) => {
    //     this.city = res;
    //   },
    //     (err) => {
    //       this.error = err;
    //     });
  }

}
