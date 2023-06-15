import React from 'react';
import styles from './styles.module.scss';
import { HiOutlineStar, HiOutlineShoppingBag } from 'react-icons/hi';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <section className={styles.card_wrapper}>
      <div className={styles.card}>
        <section className={styles.card_media}>
          <img
            src={product?.imageUrl}
            alt={product?.alt || 'product image'}
          />
          <div className={styles.cart_wrapper}>
            <HiOutlineShoppingBag className={styles.icon} />
          </div>
        </section>

        <section className={styles.card_content}>
          <div className={styles.row}>
            <h4>{product?.name}</h4>
          </div>
          <div className={styles.row}>
            <section className={styles.column}>
              <h6>${product?.offerPrice}</h6>
              <p>${product?.price}</p>
            </section>
            <div className={styles.column}>
              <HiOutlineStar className={styles.icon} />
              <HiOutlineStar className={styles.icon} />
              <HiOutlineStar className={styles.icon} />
              <HiOutlineStar className={styles.icon} />
              <HiOutlineStar className={styles.icon} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductCard;
