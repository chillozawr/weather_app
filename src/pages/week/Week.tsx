import React from 'react';
import { FC } from 'react';
import styles from './Week.module.scss';
import Today from '../../components/Today';
import OtherDays from '../../components/OtherDays';
import { useAppSelector } from '../../hooks';
import SearchModal from '../../components/modals/SearchModal';

const Week: FC = () => {
  const { showModal, city } = useAppSelector((state) => state.weather);

  return city !== '' ? (
    <div className={styles.container}>
      <Today />
      <OtherDays />
      {showModal && <SearchModal />}
    </div>
  ) : (
    <div>LOADING</div>
  );
};

export { Week };
