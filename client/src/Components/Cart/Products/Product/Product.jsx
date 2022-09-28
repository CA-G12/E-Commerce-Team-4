/* eslint-disable camelcase */
import { FaTrash } from 'react-icons/fa';
import './Product.css'

function Product({ product_img, title, price, category }) {
  return (
    <section className="product-card">
      <section className="inner-cont">
        <img className="img-url" src={product_img} alt="" />
        <section className="other-info">
          <section className="header-cart">
            <h3 className="price">$ {price} </h3>
            <FaTrash className="trash" />
          </section>
          <h3 className="category">{category}</h3>
          <h3 className="titel">{title}</h3>
          <section className='discount-info'>
            <button className="discount" type="button">Buy</button>
          </section>
        </section>
      </section >
    </section >
  );
}

export default Product;