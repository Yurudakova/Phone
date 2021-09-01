import React, {useState, useEffect} from 'react';
import styles from './TodoItem.module.css'


const TodoItem = ({title}) => {

  const [isPressed, setIsPressed]=useState(false);
 


  useEffect (()=> {
    console.log('я родился ', title)
  }, [isPressed]) 


  return (
    <div className={styles.item} onClick={()=>setIsPressed(!isPressed)}> 
      <div>
        <span className={styles.title}>{isPressed && 'bla'|| title}</span>
      </div>
    </div>
  )
};

export default TodoItem;