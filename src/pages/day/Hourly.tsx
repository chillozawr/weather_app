import React, { FC } from 'react';
import styles from './Hourly.module.scss';
import Today from '../../components/Today';
import OtherDays from '../../components/OtherDays';
import SearchModal from '../../components/modals/SearchModal';
import { useAppSelector } from '../../hooks';

const Hourly: FC = () => {
  const { showModal } = useAppSelector((state) => state.weather);
  return (
    <div className={styles.container}>
      <Today />
      <OtherDays />
      {showModal && <SearchModal />}
    </div>
  );
};

export default Hourly;
