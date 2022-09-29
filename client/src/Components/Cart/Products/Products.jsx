import { useState, useEffect } from "react";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import Product from "./Product/Product";
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log(products);

  useEffect(() => {
    axios("/api/v1/cart").then(res => {
      setProducts(res.data.products)
    }).catch((err) => {
      console.log(err);
      setError('Something went wrong')
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading)
  {
    <div>...Loading</div>
  }

  return (
    <section className="products-container-card">
      <h1 className="cart-title">Cart</h1>
      <section className="products-inner">
        {error ? <div>{error}</div> : products.map((e) => (
          <Product
            setProducts={setProducts}
            key={uuidv4()}
            productId={e.id}
            product_img={e.product_img}
            title={e.title}
            price={e.price}
            category={e.category}
          />
        ))}
      </section>
    </section>
  );
}

export default Products;