import React from "react";
import styles from './navigation.module.scss';


const NAVIGATION_ITEMS = ['shop', 'history', 'about']

const NAVIGATION_LABELS= {
    shop: 'Магазин',
    history: 'Наша истоия',
    about: 'Кто мы',
}

const Navigation = ({children}) => {
    return (
        <nav className={styles.root}>
            <ul className={styles.navLit}>
            {NAVIGATION_ITEMS.map((navItem, index) => (
                <li key={index} className={styles.navItem}>
                    <a   href={`/${navItem}`}>{NAVIGATION_LABELS[navItem]}</a>
                </li>
                
            ))}
            </ul>
        </nav>
    )
}

export default Navigation;