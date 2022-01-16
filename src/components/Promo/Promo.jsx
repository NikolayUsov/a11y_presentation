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
            <Typography  className={styles.promoTextTitle} variant="title">Наборы свежей выпечки</Typography>
            <Typography className={styles.promoTextMain}>
            Принесите запахи и вкусы вашей любимой кондитерской в ​​ваш дом.
              В наших наборах есть все, что вам нужно, чтобы каждый раз без труда готовить потрясающую выпечку.
              Мы сделали самые сложные детали, так что все, что вам нужно сделать, это раскатать, раскатать и испечь!
            </Typography>
            <Button variant="primary" type='button'>кондитерские наборы</Button>
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
