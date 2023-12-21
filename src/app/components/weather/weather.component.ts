import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  searchCityByWeather: FormGroup;
  city: any = {};
  responseApi: any;
  humidity: any;
  temperature: any;
  pressure: any;
  speed: any;
  icone: any;

  constructor(private weatherService: WeatherService, private x: FormBuilder) {}

  ngOnInit() {
    this.searchCityByWeather = this.x.group({
      name: ["", [Validators.required]],
    });
  }
  searchCity() {
    this.weatherService.searchWeather(this.city).subscribe((data) => {
      console.log(data.msg);
      this.speed = data.resultApi.speed;
      this.humidity = data.resultApi.humidity;
      this.temperature = data.resultApi.temperature;
      this.pressure = data.resultApi.pressure;
      this.icone = `https://openweathermap.org/img/wn/${data.resultApi.icone}@2x.png`;
    });
  }
}
