import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData.js";

function Items() {
  return (
    <>
    {
      data.map((dataItem,index)=>
        <div className={styles.wrapper}>
        <ItemCard name={dataItem.name} price={dataItem.price} key={index} />
        </div>
      )
    }
    </>
  );
}

export default Items;
