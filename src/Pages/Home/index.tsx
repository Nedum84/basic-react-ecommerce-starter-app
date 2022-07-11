import { useCartContext } from "Context/CartContext";
import React from "react";
import { getAllProducts } from "Services/ProductService";

function Home() {
  const { increment } = useCartContext();

  const products = getAllProducts();

  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-6 p-2">
        {products.map((product, index) => {
          return (
            <div key={index}>
              <h2>{product.name}</h2>
              <span>
                <b>NGN</b> {product.price}
              </span>
              <button className="bg-btn block px-2 py-1 mt-4" onClick={() => increment(product.id)}>
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
