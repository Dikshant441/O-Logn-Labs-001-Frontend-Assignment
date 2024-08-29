import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherByCoordinates, fetchWeatherByLocality, searchLocalities } from '@/utils/api';
import { WeatherData } from '@/utils/types';

interface WeatherState {
  searchTerm: string;
  suggestions: Array<{ id: string; name: string }>;
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  searchTerm: '',
  suggestions: [],
  weatherData: null,
  loading: false,
  error: null,
};

export const fetchWeatherByCoordinatesAsync = createAsyncThunk(
  'weather/fetchByCoordinates',
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const response = await fetchWeatherByCoordinates(latitude, longitude);
    return response as WeatherData;
  }
);

export const fetchWeatherByLocalityAsync = createAsyncThunk(
  'weather/fetchByLocality',
  async (localityId: string) => {
    const response = await fetchWeatherByLocality(localityId);
    return response as WeatherData;
  }
);

export const searchLocalitiesAsync = createAsyncThunk(
  'weather/searchLocalities',
  async (query: string) => {
    const response = await searchLocalities(query);
    return response;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCoordinatesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByCoordinatesAsync.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeatherByCoordinatesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      })
      .addCase(fetchWeatherByLocalityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByLocalityAsync.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeatherByLocalityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      })
      .addCase(searchLocalitiesAsync.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      });
  },
});

export const { setSearchTerm } = weatherSlice.actions;

export default weatherSlice.reducer;