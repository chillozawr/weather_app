import React from 'react';
import styles from './WeatherInfo.module.scss';
import { icons } from '../../utils/constants';
import { useAppSelector } from '../../hooks';

const WeatherInfoBot = () => {
  const { choosedDay } = useAppSelector((state) => state.weather);
  return (
    <div className={styles.weatherInfo + ' ' + styles.weatherInfoBot}>
      <p>
        <img className={styles.icon} src={icons[choosedDay.icon]} alt={choosedDay.icon} />
      </p>
      <p>{choosedDay.temp} °C</p>
      <p>{choosedDay.description}</p>
    </div>
  );
};

export default WeatherInfoBot;
