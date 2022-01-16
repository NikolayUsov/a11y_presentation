import React from "react";
import styles from "./style.module.scss";
import Logo from "../Logo";
import Wrapper from "../Wrapper";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className={styles.root}>
      <Wrapper>
        <div className={styles.container}>
          <Logo className={styles.logo}/>
          <Navigation />
        </div>

      </Wrapper>
    </header>
  );
};

export default Header;
