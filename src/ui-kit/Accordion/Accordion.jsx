import React, { useState } from "react";
import styles from "./accordion.module.scss";
import { Type } from "./const";

const Accordion = ({
  children,
  variant = `${Type.PRIMARY}`,
  className = "",
  title,
  details,
  id,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={className}>
      <button
        id={`btn${id}`}
        onClick={toggleOpen}
        className={styles.button}
        aria-controls="control1"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {title}
      </button>
      {isOpen && <div id="control1" role='region' aria-labelledby={`btn${id}`}>{details}</div>}
    </div>
  );
};

export default Accordion;
