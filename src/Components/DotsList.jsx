import React from 'react';
import Dots from './Dots';
import styles from './DotsList.module.css'



const DotsList = ({pageCount, pageIndex, onPageChange}) => {
    return pageCount.map((e, i) => {
        return <Dots active={pageIndex===e} onClick={() => onPageChange(e)}/>
    })
};

export default DotsList;