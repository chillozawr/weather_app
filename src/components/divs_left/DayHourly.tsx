import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import HourItem from './HourItem';
import styles from './DayHourly.module.scss';

const DayHourly: FC = () => {
  const { choosedDay } = useAppSelector((state) => state.weather);
  return (
    <div className={styles.container}>
      {choosedDay.hours.map((hour) => {
        return (
          <HourItem
            key={hour.datetime}
            datetime={hour.datetime}
            temp={hour.temp}
            conditions={hour.conditions}
            icon={hour.icon}
          />
        );
      })}
    </div>
  );
};

export default DayHourly;
