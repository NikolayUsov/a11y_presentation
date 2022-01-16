import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Wrapper from "../Wrapper";
import styles from "./catalog.module.scss";
import { products } from "./data";

const Catalog = () => {
  return (
    <section className={styles.root}>
      <Wrapper>
        <div className={styles.container}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Catalog;
