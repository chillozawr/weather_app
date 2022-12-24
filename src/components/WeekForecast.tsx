import React, { FC } from 'react';
import { useActions, useAppSelector } from '../hooks';
import styles from './WeekForecast.module.scss';
import { days, icons, shortDays } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
const WeekForecast: FC = () => {
  const { weather, choosedDay, isWeek } = useAppSelector((state) => state.weather);
  const { setToday } = useActions();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {weather.days.map((day) => {
        const curDate = new Date(day.datetime);
        return (
          <div
            key={day.datetime}
            className={
              day.datetime === choosedDay.datetime
                ? styles.dayContainer + ' ' + styles.dayActive
                : styles.dayContainer
            }
            onClick={() => {
              setToday(day);
              !isWeek && navigate(`/day/${days[curDate.getDay()]}}`);
            }}
          >
            <img className={styles.icon} src={icons[day.icon]} alt={day.icon} />
            <p>{day.temp} °C</p>
            <p>{shortDays[curDate.getDay()]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeekForecast;
