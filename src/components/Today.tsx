import React, { FC } from 'react';
import styles from './Today.module.scss';
import { days } from '../utils/constants';
import { useActions, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import WeatherInfoTop from './divs_left/WeatherInfoTop';
import WeatherInfoBot from './divs_left/WeatherInfoBot';
import DayHourly from './divs_left/DayHourly';

const Today: FC = () => {
  const navigate = useNavigate();
  const { setIsWeek } = useActions();
  const { choosedDay, isWeek } = useAppSelector((state) => state.weather);
  const curDate = new Date(choosedDay.datetime);
  return (
    <div className={styles.container}>
      {isWeek ? (
        <>
          <WeatherInfoTop />
          <WeatherInfoBot />
        </>
      ) : (
        <DayHourly />
      )}
      <div
        onClick={() => {
          isWeek ? navigate(`/day/${days[curDate.getDay()]}`) : navigate('/');
          setIsWeek(!isWeek);
          localStorage.setItem('isWeek', JSON.stringify(!isWeek));
        }}
        className={styles.switcher}
      >
        <span className={isWeek ? styles.span_bold : styles.span_med}>hourly </span>
        <span className={styles.span_bold}>/</span>
        <span className={isWeek ? styles.span_med : styles.span_bold}>week</span>
      </div>
    </div>
  );
};

export default Today;
