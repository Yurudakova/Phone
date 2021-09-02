import React from 'react';
import styles from './TodoItem.module.css'
import cn from 'classnames'

const TodoItem = ({title, onClick, mini}) => {
  return (
    <div className={cn(styles.item, {[styles.mini]: mini})} onClick={onClick}>
      <span className={styles.title}>{title}</span>
    </div>
  )
};

export default TodoItem;