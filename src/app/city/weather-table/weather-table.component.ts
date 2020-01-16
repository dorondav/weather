import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css']
})
export class WeatherTableComponent implements OnInit {
  @Input() weather: [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

  }
  ngOnChanges() {
    // catch changes
    console.log(this.weather);

  }
  // getWeather() {
  //   // this.weather = this.weatherService.returnWeather();
  //   console.log(this.city);
  // }
}
