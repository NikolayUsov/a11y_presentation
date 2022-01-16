import React from "react";
import styles from "./productCard.module.scss";
import Typography from "../../ui-kit/Typography";
import Button from "../../ui-kit/Button";


const ProductCard = ({product}) => {
  const {name, price, imageNumber} = product;
  return (
    <div className={styles.root} tabIndex={0}>
      <div className={styles.imageContainer}>
        <img src={`./products/img/product-${imageNumber}.png`} alt="Изображение нашей продукции"/>
      </div>
      <Typography tagName='h3' className={styles.productName}>{name}</Typography>
      <span className={styles.productPrice}>
        {`Цена - ${price} рублей`}
      </span>
      <Button className={styles.addTocart}variant="secondary">Добавит в корзину</Button>
    </div>
  );
};

export default ProductCard;
