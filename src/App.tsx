import React, { useEffect } from 'react';
import { Layout } from './layout';
import { Week } from './pages/week';
import { Route, Routes } from 'react-router-dom';
import {
  useLazyGetWeatherByLocationQuery,
  useLazyGetWeatherWeekQuery,
} from './store/weather/weather.api';
import { useActions, useAppSelector } from './hooks';
import Hourly from './pages/day/Hourly';
import { Weather } from './store/types';

function App() {
  const { setWeather, setToday, setCity, setIsGeoLocation, setShowModal } = useActions();
  const { city, isWeek, isGeoLocation } = useAppSelector((state) => state.weather);
  const [triggerCity] = useLazyGetWeatherWeekQuery();
  const [triggerGeoLoc] = useLazyGetWeatherByLocationQuery();

  const setData = (result: Weather) => {
    setWeather(result!);
    setToday(result!.days[0]);
    setCity(result!.timezone);
    localStorage.setItem('currentCity', result!.address);
    localStorage.setItem('isWeek', JSON.stringify(isWeek));
    setIsGeoLocation(false);
  };
  const successGeo = async (position: GeolocationPosition) => {
    const result = await triggerGeoLoc({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }).unwrap();
    setData(result);
  };

  const errorGeo = async () => {
    try {
      const result = await triggerCity(
        localStorage.getItem('currentCity')
          ? localStorage.getItem('currentCity')!.toString()
          : city
            ? city
            : 'Saratov',
      ).unwrap();
      setData(result);
      setShowModal(false);
    } catch (e: any) {
      alert(e.data)
    }

  };

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('HELLO');
    } else {
      navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
    }
  }, []);

  useEffect(() => {
    !isGeoLocation && errorGeo();
  }, [city]);
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Week />} />
        <Route path={`/day/:name`} element={<Hourly />} />
      </Routes>
    </Layout>
  );
}

export default App;
