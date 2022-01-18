import React from "react";
import styles from './style.module.scss';
import logo from './img/logo.png';


const Logo = ({className}) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <a href="/" > 
                <img src={logo} alt="Логотип компании Tarla"/>
            </a>
        </div>
    )
}

export default Logo;