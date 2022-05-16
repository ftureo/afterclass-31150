import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getData from "../services/getData";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log("Products before promise", products); // Empty

  useEffect(() => {
    getData
      .then((response) => setProducts(response))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={10} initial={1} />
      <ItemList />
    </>
  );
};
export default ItemListContainer;
