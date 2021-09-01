import React from 'react';
import styles from './ModalItem.module.css'

const ModalItem = ({title, onClick}) => {
  return (
      <div className={styles.modal} onClick={onClick}>
        <span className={styles.title}>{title}</span>
      </div>
  );
};

export default ModalItem;

