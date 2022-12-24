import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ChangeLocation from './ChangeLocation';
import { useActions } from '../../hooks';
import styles from './SearchModal.module.scss';
const SearchModal: FC = () => {
  const { setShowModal } = useActions();
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setShowModal(false);
  };
  return ReactDOM.createPortal(
    <div className={styles.container} onClick={closeModal}>
      <ChangeLocation />
    </div>,
    document.getElementById('modal-root')!,
  );
};

export default SearchModal;
