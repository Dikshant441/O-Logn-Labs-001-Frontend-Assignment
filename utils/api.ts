import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://www.weatherunion.com/gw/weather/external/v0";

export const fetchWeatherByCoordinates = async (
  latitude: number,
  longitude: number
) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/get_weather_data`,
    params: { latitude, longitude },
    headers: { "X-Zomato-Api-Key": API_KEY },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchWeatherByLocality = async (localityId: string) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/get_locality_weather_data`,
    params: { locality_id: localityId },
    headers: { "X-Zomato-Api-Key": API_KEY },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const searchLocalities = async (query: string) => {
  return [
    { id: "ZWL001156", name: "New York", country: "United States" },
    { id: "ZWL008975", name: "Mumbai", country: "India" },
    { id: "ZWL007486", name: "Delhi", country: "India" },
    { id: "ZWL005087", name: "Gurgaon", country: "India" },
    { id: "ZWL005375", name: "Bangalore", country: "India" },
    { id: "ZWL007934", name: "Kolkata", country: "India" },
    { id: "ZWL006743", name: "Pune", country: "India" },
    { id: "ZWL003283", name: "Hyderabad", country: "India" },
    { id: "ZWL007059", name: "Chennai", country: "India" },
    { id: "ZWL003455", name: "Ahmedabad", country: "India" },
    { id: "ZWL006687", name: "Chandigarh", country: "India" },
    { id: "ZWL002150", name: "Goa", country: "India" },
    { id: "ZWL006900", name: "Bhopal", country: "India" },
    { id: "ZWL002155", name: "Surat", country: "India" },
    { id: "ZWL008753", name: "Jammu", country: "India" },
    { id: "ZWL008938", name: "Vadodara", country: "India" },
    { id: "ZWL009668", name: "Coimbatore", country: "India" },
    { id: "ZWL008906", name: "Bhubaneswar", country: "India" },
  ].filter((locality) =>
    locality.name.toLowerCase().includes(query.toLowerCase())
  );
};
