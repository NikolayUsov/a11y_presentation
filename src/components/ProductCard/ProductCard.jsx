import React from "react";
import styles from "./productCard.module.scss";
import Typography from "../../ui-kit/Typography";
import Button from "../../ui-kit/Button";


const ProductCard = ({product}) => {
  const {name, price, imageNumber} = product;
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img src={`./products/img/product-${imageNumber}.png`}/>
      </div>
      <Typography className={styles.productName}>{name}</Typography>
      <span className={styles.productPrice}>
        {`Kit of 6 - ${price}`}
      </span>
      <Button varian="secondary">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
