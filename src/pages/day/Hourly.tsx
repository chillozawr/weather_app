import React, { FC } from 'react';
import styles from './Hourly.module.scss';
import Today from '../../components/Today';
import OtherDays from '../../components/OtherDays';

const Hourly: FC = () => {
  return (
    <div className={styles.container}>
      <Today />
      <OtherDays />
    </div>
  );
};

export default Hourly;
