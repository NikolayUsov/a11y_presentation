import React, {useState} from "react";
import styles from './accordion.module.scss';
import {Type} from './const';

const Accordion = ({children, variant=`${Type.PRIMARY}`, className = '', title, details, ...props}) => {
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((prev) => !prev)
    }
  

    return (
       <div className={className}>
           <button onClick={toggleOpen} className={styles.button}>
               {title}
           </button>
           {isOpen && details}
       </div>
    )
}

export default Accordion;