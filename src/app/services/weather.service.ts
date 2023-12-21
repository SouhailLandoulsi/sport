import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  weatherUrl: string = "http://localhost:3000/weather";
  matchUrlSearchWeather: string = "http://localhost:3000/weather/search";
  obj: any = {};

  constructor(private httpClient: HttpClient) {}
  searchWeather(obj) {
    return this.httpClient.post<{ msg: any; resultApi: any }>(
      this.matchUrlSearchWeather,
      obj
    );
  }
}
