import React, {useState} from 'react';
import TodoItem from './TodoItem';
import Folder from './Folder'



const TodoList = ({currentList, mini, rootElement}) => {

  const [openIndex, setOpenIndex] = useState(-1);

  function onFolderClick(i) {
    setOpenIndex(i === openIndex ? -1 : i)
  }

  return currentList.map((e, i) => {
      if (e.children)
        return <Folder
            todos={e.children}
            modal={openIndex === i}
            rootElement={rootElement}
            onClick={() => onFolderClick(i)} 
            title={e.title}/>
      else
        return <TodoItem title={e.title} mini={mini} key={i} />
    })

};

export default TodoList;