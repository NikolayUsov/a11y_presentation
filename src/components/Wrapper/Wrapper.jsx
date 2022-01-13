import React from "react";
import styles from './wrapper.module.scss';


const Wrapper = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    )
}

export default Wrapper;