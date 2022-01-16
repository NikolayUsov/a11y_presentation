import React, { useState } from "react";
import styles from "./accordion.module.scss";
import { Type } from "./const";

const Accordion = ({
  children,
  variant = `${Type.PRIMARY}`,
  className = "",
  title,
  details,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={className}>
      <button
        id="btn1"
        onClick={toggleOpen}
        className={styles.button}
        aria-controls="control1"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {title}
      </button>
      {isOpen && <div id="control1" role='region' aria-labelledby="btn1">{details}</div>}
    </div>
  );
};

export default Accordion;
