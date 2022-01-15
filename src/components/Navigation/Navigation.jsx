import React from "react";
import styles from './navigation.module.scss';


const NAVIGATION_ITEMS = ['Shop', 'Our Story', 'Who is Tarla?']

const Navigation = ({children}) => {
    return (
        <div className={styles.root}>
            {NAVIGATION_ITEMS.map((navItem, index) => (
                <a key={index} className={styles.navItem}>{navItem}</a>
            ))}
        </div>
    )
}

export default Navigation;