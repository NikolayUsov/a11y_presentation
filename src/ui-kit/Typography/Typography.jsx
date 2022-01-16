import React from "react";
import styles from './Typography.module.scss';
import {Type} from './const';

const Typography = ({children, tagName='', variant=`${Type.MAIN}`, className}) => {

    const TagName = tagName ? tagName :  variant === Type.MAIN ? 'p': variant === Type.SUBTITLE ? 'h2' : 'h3' ;

    return (
        <TagName className={`${styles[variant]} ${className}`}>
            {children}
        </TagName>
    )
}

export default Typography;