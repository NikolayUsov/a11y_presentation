import React, {useState} from "react";
import styles from "./orderForm.module.scss";
import Wrapper from "../Wrapper";
import Button from "../../ui-kit/Button";
import Typography from "../../ui-kit/Typography";

const initFormInput = {
  name: {
    value: '',
  },
  phone: {
    value: '',
  },
};

const Labels = {
  name: 'Имя',
  phone: 'Телефон',
}

const OrderForm = ({ children }) => {
const [inputs, setInputValue] = useState(initFormInput);

const handleChange = (evt) => {
  const {name, value} = evt.target;
  const newState = {
    ...inputs,
    [name]: {value}
  }
  setInputValue(newState);
  console.log(evt)
}
  return (
    <div className={styles.root}>
      <Wrapper>
        <Typography variant='subtitle' className={styles.title}>Оставьте заказ и мы свяжемся</Typography>
        <form method="post" className={styles.formContainer}>
          {
            Object.keys(inputs).map((type) => (
              <div
              className={styles.inputWrapper}
              key={type}
            >
              <label htmlFor={type} className={styles.visuallyHidden}>{Labels[type]}</label>
              <input
                value={inputs[type].value}
                onChange={handleChange}
                // id={type}
                className={styles.input}
                type={type}
                name={type}
                placeholder={Labels[type]}
              />
            </div>
            ))
          }
        <Button variant="primary" type="submit">Отрпавить</Button>
        </form>
      </Wrapper>
    </div>
  );
};

export default OrderForm;
