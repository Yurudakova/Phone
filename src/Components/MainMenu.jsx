import React, {useRef, useState} from 'react';
import styles from './MainMenu.module.css'
import ModalItem from './ModalItem';
import TodoList from './TodoList';

const MainMenu = ({todos}) => {

  const ref = useRef()


  return (
      <div className={styles.wrapper} ref={ref}>
        <TodoList todos={todos} rootElement={ref} />
      </div>
  );
};

export default MainMenu;