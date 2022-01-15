import React from "react";
import styles from './button.module.scss';
import {Type} from './const';

const Button = ({children, varian=`${Type.PRIMARY}`, className = '', tagName = 'button', ...props}) => {
    const TagName  = tagName;

    return (
        <TagName className={`${styles.root} ${styles[varian]} ${className}`} {...props}>
            {children}
        </TagName>
    )
}

export default Button;