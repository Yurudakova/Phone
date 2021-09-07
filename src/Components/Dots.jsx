import React from 'react';
import styles from './Dots.module.css';
import cn from 'classnames';

const Dots = ({active, onClick}) => {
    return (
        <div onClick={onClick}>
        <div className={cn({[styles.active]: active}, {[styles.noActive]:!active})}/> 
      </div>
    )
  };
  
  export default Dots