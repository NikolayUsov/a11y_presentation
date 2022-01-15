import React from "react";
import styles from './Typography.module.scss';
import {Type} from './const';

const Typography = ({children, variant=`${Type.MAIN}`, className}) => {

    const TagName = variant === Type.MAIN ? 'p': variant === Type.SUBTITLE ? 'h1' : 'h3' ;

    return (
        <TagName className={`${styles[variant]} ${className}`}>
            {children}
        </TagName>
    )
}

export default Typography;