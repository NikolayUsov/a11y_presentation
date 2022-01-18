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
const isSubmitBtnDisabled = Object.keys(inputs).some((input) => !inputs[input].value)
const handleChange = (evt) => {
  const {name, value} = evt.target;
  const newState = {
    ...inputs,
    [name]: {value}
  }
  setInputValue(newState);
  console.log(evt)
}
const onFormSubmit =(evt) => {
  evt.preventdefault();
}
  return (
    <section className={styles.root}>
      <Wrapper>
        <Typography variant='subtitle' className={styles.title}>Оставьте заказ и мы свяжемся</Typography>
        <form method="post" className={styles.formContainer} onSubmit={onFormSubmit}>
          {
            Object.keys(inputs).map((type) => (
              <div
              className={styles.inputWrapper}
              key={type}
            >
              <label htmlFor={type} aria-hidden="true" className={styles.visuallyHidden}>{Labels[type]}</label>
              <input
                value={inputs[type].value}
                onChange={handleChange}
                id={type}
                className={styles.input}
                type={type}
                name={type}
                placeholder={Labels[type]}
                aria-required="true"
              />
            </div>
            ))
          }
        <Button
          variant="primary"
          type="submit"
          tab-index={0}
          aria-disabled={isSubmitBtnDisabled ? 'true': 'false'}
          disabled={isSubmitBtnDisabled}>
            Отрпавить
        </Button>
        <p  className='visuallyHidden' aria-live="assertive">
          {isSubmitBtnDisabled ? 'Введите Ваше Имя и телефон для отправки формы' : 'Нажмите кнопку отправить'}
          </p>
        </form>
      </Wrapper>
    </section>
  );
};

export default OrderForm;
