import React from "react";
import styles from './Typography.module.scss';
import {Type} from './const';

const Typography = ({children, varian=`${Type.MAIN}`, className}) => {

    const TagName = varian === Type.MAIN ? 'p': varian === Type.SUBTITLE ? 'h1' : 'h3' ;

    return (
        <TagName className={`${styles[varian]} ${className}`}>
            {children}
        </TagName>
    )
}

export default Typography;