import React from 'react';
import styles from './TodoItem.module.css'


const TodoItem = ({title, onClick}) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
};

export default TodoItem;