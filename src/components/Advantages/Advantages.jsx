import React from "react";
import Button from "../../ui-kit/Button";
import Typography from "../../ui-kit/Typography";
import Wrapper from "../Wrapper";
import styles from "./advantages.module.scss";

const ADVANTAGES_LIST = [
  {
    title: 'Choose your fave',
    text:  'This sounds easier than it s going to be. We\'ve got all the classics on here, so now it\'s over to you.'
  },
  {
    title: 'Ding dong',
    text: 'Next you\'ll get a beautiful little package delivered to your door, on a day and time slot that you choose.'
  },
  {
    title: 'Get baked',
    text: 'Take your fresh pastry sheet and fillings, learn our pro techniques then never buy a stale pastry ever again.'
  },
  {
    title: 'Take the credit',
    text:  'It was all you, nudge-nudge wink-wink. We\'re just happy to be your loyal side-kick.'
  },
];
const Advantages = ({ children }) => {
  return (
    <div className={styles.root}>
      <Wrapper>
        <p className={styles.title}>How it works</p>
        <div className={styles.advantagesList}>
        {ADVANTAGES_LIST.map(({title, text}, index) => (
                <div key={index} className={styles.advantagesItem}>
                  <Typography  variant="subtitle" className={styles.advantagesItemTitle}>{title}</Typography>
                  <Typography  variant='main' className={styles.advantagesItemText}>{text}</Typography>
                </div>
            ))}
        </div>
        <Button className={styles.advantagesButton} type='button' variant="secondary">Shop pastry kits</Button>
      </Wrapper>
    </div>
  );
};

export default Advantages;
