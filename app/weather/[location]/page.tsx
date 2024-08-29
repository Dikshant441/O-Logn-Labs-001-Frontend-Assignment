"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store/store";
import { fetchWeatherByLocalityAsync } from "@/lib/store/weatherSlice";
import Link from "next/link";
import { Cloud, Droplets, Wind, Umbrella } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const WeatherPage = ({ params }: { params: { location: string } }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { weatherData, loading, error, suggestions } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    if (params.location && typeof params.location === "string") {
      dispatch(fetchWeatherByLocalityAsync(params.location));
    }
  }, [params.location, dispatch]);

  const name = suggestions.find(
    (suggestion) => suggestion.id === params.location
  )?.name;

  if (!weatherData) return null;

  const getWeatherIcon = (temperature: number) => {
    if (temperature > 30) return "☀️";
    if (temperature > 20) return "🌤️";
    if (temperature > 10) return "⛅";
    return "☁️";
  };

  const getWindDirection = (degrees: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(degrees / 45) % 8];
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        {name}&apos;s Weather
      </h1>

      {error ? (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : loading ? (
        <div className="text-center mt-8">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg sm:text-xl text-gray-900">
            Loading weather data...
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl sm:text-6xl font-bold">
                    {weatherData?.locality_weather_data.temperature}°C
                  </p>
                  <p className="text-lg sm:text-xl mt-2">Feels comfortable</p>
                </div>
                <div className="text-7xl md:text-8xl">
                  {getWeatherIcon(
                    weatherData?.locality_weather_data.temperature
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                title: "Humidity",
                icon: <Droplets className="h-4 w-4 text-muted-foreground" />,
                value: `${weatherData?.locality_weather_data.humidity}%`,
              },
              {
                title: "Wind",
                icon: <Wind className="h-4 w-4 text-muted-foreground" />,
                value: `${weatherData?.locality_weather_data.wind_speed} km/h`,
                subtext: `Direction: ${getWindDirection(
                  weatherData?.locality_weather_data.wind_direction
                )}`,
              },
              {
                title: "Rain Accumulation",
                icon: <Umbrella className="h-4 w-4 text-muted-foreground" />,
                value: `${weatherData?.locality_weather_data.rain_accumulation} mm`,
              },
              {
                title: "Rain Intensity",
                icon: <Umbrella className="h-4 w-4 text-muted-foreground" />,
                value: `${weatherData?.locality_weather_data.rain_intensity} mm`,
              },
            ].map((item, index) => (
              <Card
                className="p-4 hover:shadow-md transition-shadow duration-300"
                key={index}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  {item.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">
                    {item.value}
                  </div>
                  {item.subtext && (
                    <p className="text-xs text-muted-foreground">
                      {item.subtext}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Link
            href="/"
            className="inline-block w-full text-center py-3 bg-slate-950 text-white rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Back to Search
          </Link>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
