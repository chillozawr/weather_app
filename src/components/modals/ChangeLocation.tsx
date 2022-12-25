import React, { useState } from 'react';
import styles from './ChangeLocation.module.scss';
import { useActions } from '../../hooks';

const ChangeLocation = () => {
  const [newCity, setNewCity] = useState('');
  const { setCity } = useActions();
  const submitChanging = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCity(newCity);
    localStorage.setItem('currentCity', newCity);
    setNewCity('');
  };

  const onEditCityHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewCity(e.target.value);
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div className={styles.searchBar}>
        <form onSubmit={submitChanging}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder={'Choose new location...'}
            value={newCity}
            onChange={onEditCityHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangeLocation;
