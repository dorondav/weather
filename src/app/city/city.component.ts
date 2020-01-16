import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.model';
import { WeatherService } from '../weather.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  city: City[] = [];
  title = 'weather';
  cityName: string;
  submitted = false;
  form: FormGroup;
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    // Initialize form on page upload
    this.form = new FormGroup({
      city: new FormControl(null, { validators: [Validators.required] })
    });
  }
  onCitySelect(city) {
    // Stop if form is invalid
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.weatherService.getCurrentWeather(this.form.value.city)
      .subscribe((data: any) => {
        this.city = [this.form.value.city, ...data.list];
      });
  }
}
