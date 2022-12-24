import React, { FC } from 'react';
import styles from './WeatherInfo.module.scss';
import { days, months } from '../../utils/constants';
import locationLogo from '../../assets/icons/Location.svg';
import { useAppSelector } from '../../hooks';
const WeatherInfoTop: FC = () => {
  const { choosedDay, city } = useAppSelector((state) => state.weather);
  const curDate = new Date(choosedDay.datetime);
  return (
    <div className={styles.weatherInfo}>
      <p>{days[curDate.getDay()]}</p>
      <p>{`${curDate.getUTCDate()} ${months[curDate.getMonth()]} ${curDate.getFullYear()}`}</p>
      <p>
        <img src={locationLogo} />
        {city}
      </p>
    </div>
  );
};

export default WeatherInfoTop;
