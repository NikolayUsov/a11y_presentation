import React from "react";
import Wrapper from "../Wrapper";
import styles from "./promo.module.scss";
import Typography from "../../ui-kit/Typography";
import promo_0 from './img/promo_0.png';
import Button from "../../ui-kit/Button";

const Promo = ({ children }) => {
  return (
    <div className={styles.root}>
      <Wrapper>
        <div className={styles.inner}>
          <div className={styles.promoText}>
            <Typography  className={styles.promoTextTitle} varian="title">Fresh pastry kits</Typography>
            <Typography className={styles.promoTextMain}>
              Bringing the smells and tastes of your favourite patisserie to your home. 
              Our kits have everything you need to easily make killer pastries every time. 
              We haveve done the tricky bits so all you need to do is roll, proof and bake!
            </Typography>
            <Button varian="primary" type='button'>Shop pastry kits</Button>
          </div>
          <div className={styles.promoMedia}>
            <div className={styles.promoMediaContainer}>
              <img src={promo_0}/>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Promo;
