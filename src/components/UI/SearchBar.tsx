import React, { FC } from 'react';
import styles from './SearchBar.module.scss';
import locationLogo from '../../assets/icons/Location.svg';
import { useActions } from '../../hooks';
const SearchBar: FC = () => {
  const { setShowModal } = useActions();
  return (
    <div className={styles.container}>
      <button className={styles.submit} onClick={() => setShowModal(true)}>
        <img src={locationLogo} /> CHANGE LOCATION
      </button>
    </div>
  );
};

export default SearchBar;
