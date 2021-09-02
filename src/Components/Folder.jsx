import React, {useEffect, useRef, useState} from 'react';
import TodoList from './TodoList';
import styles from './Folder.module.css';
import cn from 'classnames';

const Folder = ({todos, modal, onClick, rootElement}) => {

  const ref = useRef();

  const [{ox, oy}, setOffsets] = useState({ox: 0, oy: 0});

  useEffect(() => {
    const root = rootElement.current;
    const elm = ref.current;
    const {x: x1, y: y1} = root.getBoundingClientRect();
    const {x: x2, y: y2} = elm.getBoundingClientRect();
    const ox = (x2 - ((x1 + 120) - 85)) * -1;
    const oy = (y2 - ((y1 + 240) - 85)) * -1;

    setOffsets({ox, oy});
  }, [rootElement, ref]);

  return (
      <div className={styles.wrapper}>
        {modal && <div className={styles.blur}/>}
        <div
            ref={ref}
            className={cn(styles.folder, {[styles.modal]: modal})}
            onClick={onClick}
            style={modal ? {marginLeft: ox + 'px', marginTop: oy + 'px'} : {}}
        >
          <TodoList todos={todos} mini={!modal}/>
        </div>
      </div>
  );
};

export default Folder;