import React,{useState} from "react";
import data from "../../data";

import ProductList from "../../components/ProductsList/ProductList";
import Cart from "../../components/Cart/Cart";

import './ChooseProduct.css'

function ChooseProduct() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="container">
      <ProductList products={products} onAdd={onAdd}/>
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
    </div>
  );
}

export default ChooseProduct;
