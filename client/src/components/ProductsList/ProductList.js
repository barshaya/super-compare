import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css'

function ProductList({ products, onAdd }) {
  return (
    <div className="products-list">
      {products.map((product) => 
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      )}
    </div>
  );
}
export default ProductList;
