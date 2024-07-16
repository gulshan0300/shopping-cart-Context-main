import React from "react";
import styles from "../styles/ItemCard.module.css";
import { ItemContext } from "../App";



function ItemCard({ name, price}) {
  const value =React.useContext(ItemContext);

  

  
 
  const handleAdd = (price) => {
    value.setTotal(value.total+price);
    value.setItem((p)=>p+1);
  };

  const handleRemove = (price) => {
    if(value.item<=0){
      return
    }
    value.setTotal((p)=>p-price);
    value.setItem((p)=>p-1);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
