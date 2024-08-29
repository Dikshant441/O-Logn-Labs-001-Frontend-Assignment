export interface WeatherData {
  locality_weather_data: {
    temperature: number,
    humidity: number,
    wind_speed: number,
    wind_direction: number,
    rain_intensity: number,
    rain_accumulation: number
  }
  }