import React, { FC } from 'react';
import styles from './DayDescription.module.scss';
import { useAppSelector } from '../../hooks';

const DayDescription: FC = () => {
  const { choosedDay } = useAppSelector((state) => state.weather);
  return (
    <div className={styles.description}>
      <p>Feels {choosedDay.feelslike} °C</p>
      <p>Wind {choosedDay.windspeed} km/h</p>
    </div>
  );
};

export default DayDescription;
