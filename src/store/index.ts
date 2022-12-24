import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './weather/weather.api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherReducer } from './weather/weather.slice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
