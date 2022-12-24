import React, { FC } from 'react';
import { Hour } from '../../store/types';
import styles from './HourItem.module.scss';
import { icons } from '../../utils/constants';

const HourItem: FC<Hour> = ({ datetime, icon, temp, conditions }) => {
  return (
    <div className={styles.container}>
      <p>{datetime.slice(0, 5)}</p>
      <p>
        <img className={styles.icon} src={icons[icon]} alt={icon} />
      </p>
      <p>{temp} °C</p>
      <p>{conditions}</p>
    </div>
  );
};

export default HourItem;
