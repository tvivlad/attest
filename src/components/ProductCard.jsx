import React from 'react'
import classes from './ProductCard.module.css'
const ProductCard = ({ title, category, desc, image, price, count }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      <img src={image} className={classes.photo} alt='' />
      <div>{desc}</div>
      <div className={classes.price}>Цена: {price}</div>
      <div className={classes.price}>В наличии: {count}</div>
    </div>
  )
}

export default ProductCard
