import React from "react";
import styles from "./style.module.scss";
import Logo from "../Logo";
import Wrapper from "../Wrapper";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div className={styles.root}>
      <Wrapper>
        <div className={styles.container}>
          <Logo className={styles.logo}/>
          <Navigation />
        </div>

      </Wrapper>
    </div>
  );
};

export default Header;
