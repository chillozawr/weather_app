import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Coords, Weather } from '../types';
import { API_KEY } from '../../utils/constants';

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.visualcrossing.com/weather-api',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getWeatherWeek: build.query<Weather, string>({
      query: (city) =>
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=${API_KEY}&contentType=json`,
    }),
    getWeatherByLocation: build.query<Weather, Coords>({
      query: ({ longitude, latitude }: Coords) =>
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude}%2C%20${longitude}/next7days?unitGroup=metric&key=${API_KEY}&contentType=json`,
    }),
  }),
});

export const { useLazyGetWeatherByLocationQuery, useLazyGetWeatherWeekQuery } = weatherApi;
