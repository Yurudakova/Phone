import React, {useState} from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import ModalItem from './ModalItem';
import Folder from './Folder';



const TodoList = ({todos, mini, rootElement}) => {

  const [openIndex, setOpenIndex] = useState(-1);

  function onFolderClick(i) {
    setOpenIndex(i === openIndex ? -1 : i)
  }

  return todos.map((e, i) => {
      if (e.children)
        return <Folder
            todos={e.children}
            modal={openIndex === i}
            rootElement={rootElement}
            onClick={() => onFolderClick(i)} />
      else
        return <TodoItem title={e.title} mini={mini} />
    })

};

export default TodoList;