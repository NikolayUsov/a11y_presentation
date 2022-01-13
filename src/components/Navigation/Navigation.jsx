import React from "react";
import styles from "./style.module.scss";
import Logo from "../Logo";
import Wrapper from "../Wrapper";

const Navigation = () => {
  return (
    <div className={styles.root}>
      <Wrapper>
        <Logo />
      </Wrapper>
    </div>
  );
};

export default Navigation;
