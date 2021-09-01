import React, {useState} from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import ModalItem from './ModalItem';



const TodoList = ({todos}) => {
  const [modalTitle, setModalTitle]=useState('');

  function onClick(title) {
    setModalTitle(title);
  }

  function onModalClick() {
    setModalTitle('');
  }

  return <div className ={styles.wrapper} >
    {todos.map(e => {
      if (e.children)
        return <TodoItem title={e.title + ' папка'} onClick={() => onClick(e.title)}/>
      else
        return <TodoItem title={e.title} onClick={() => onClick(e.title)}/>
    })}
    {modalTitle && <ModalItem title={modalTitle} onClick={onModalClick} />}
    </div>;
};

export default TodoList;