import React from "react";
import styles from './style.module.scss';
import logo from './img/logo.png';


const Logo = () => {
    return (
        <div className={styles.root}>
            <a href="">
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Logo;