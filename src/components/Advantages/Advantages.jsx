import React from "react";
import Accordion from "../../ui-kit/Accordion";
import Button from "../../ui-kit/Button";
import Typography from "../../ui-kit/Typography";
import Wrapper from "../Wrapper";
import styles from "./advantages.module.scss";

const ADVANTAGES_LIST = [
  {
    title: 'Выберите свой любимый',
    text:  'Это звучит проще, чем кажется. У нас здесь есть вся классика, так что теперь дело за вами.'
  },
  {
    title: 'Дзынь-дзынь',
    text: 'Затем вы получите красивую маленькую посылку, доставленную к вашей двери, в день и время, которые вы выберете.'
  },
  {
    title: 'Получить испеченный',
    text: 'Возьмите лист свежего теста и начинку, изучите наши профессиональные приемы и никогда больше не покупайте черствую выпечку.'
  },
  {
    title: 'Получи доверие',
    text: 'Это все ты, подмигнул-подмигнул. Мы просто счастливы быть вашим верным помощником.'
  },
];
const Advantages = ({ children }) => {
  return (
    <div className={styles.root}>
      <Wrapper>
        <p className={styles.title}>Как мы работаем</p>
        <div className={styles.advantagesList}>
        {ADVANTAGES_LIST.map(({title, text}, index) => {
          const accordionTitle = <Typography  variant="subtitle" className={styles.advantagesItemTitle}>{title}</Typography>
          const accordionDetails =  <Typography  variant='main' className={styles.advantagesItemText}>{text}</Typography>
          return (

              <Accordion  key={index} title={accordionTitle} details={accordionDetails} className={styles.advantagesItem}/>

        )
        })}
        </div>
        <Button className={styles.advantagesButton} type='button' variant="secondary">кондитерские наборы</Button>
      </Wrapper>
    </div>
  );
};

export default Advantages;
