import React, { FC } from 'react';
import styles from './OtherDays.module.scss';
import WeekForecast from './WeekForecast';
import SearchBar from './UI/SearchBar';
import { useAppSelector } from '../hooks';
import DayDescription from './div_right/DayDescription';

const OtherDays: FC = () => {
  const { isWeek } = useAppSelector((state) => state.weather);
  return (
    <div className={styles.container}>
      <div className={styles.containerRight}>
        {isWeek && <DayDescription />}
        <WeekForecast />
        <SearchBar />
      </div>
    </div>
  );
};

export default OtherDays;
