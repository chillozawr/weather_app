import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Day, Weather } from '../types';

const isWeek = localStorage.getItem('isWeek') ? JSON.parse(localStorage.getItem('isWeek')!) : true;

interface AppState {
  weather: Weather;
  choosedDay: Day;
  showModal: boolean;
  city: string;
  isWeek: boolean;
  isGeoLocation: boolean;
}

const initialState: AppState = {
  weather: {
    address: '',
    timezone: '',
    days: [],
  },
  choosedDay: {
    datetime: '',
    tempmax: 0,
    temp: 0,
    feelslike: 0,
    windspeed: 0,
    conditions: '',
    description: '',
    icon: '',
    hours: [],
  },
  showModal: false,
  city: '',
  isWeek: isWeek,
  isGeoLocation: true,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
    },
    setToday: (state, action: PayloadAction<Day>) => {
      state.choosedDay = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setIsWeek: (state, action: PayloadAction<boolean>) => {
      state.isWeek = action.payload;
    },
    setIsGeoLocation: (state, action: PayloadAction<boolean>) => {
      state.isGeoLocation = action.payload;
    },
  },
});

const weatherActions = weatherSlice.actions;
const weatherReducer = weatherSlice.reducer;
export { weatherSlice, weatherActions, weatherReducer };
