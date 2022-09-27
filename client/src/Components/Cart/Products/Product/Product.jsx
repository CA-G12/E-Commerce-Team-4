/* eslint-disable camelcase */
import './Product.css'

function Product({ product_img, title, price, category }) {
  return (
    <section className="product-card">
      <button className="discount" type="button">10%OFF</button>
      <section className="inner-cont">
        <img className="imgUrl" src={product_img} alt="" />
        <h3 className="titel">{title} </h3>
        <h3 className="price">{price} </h3>
        <h3 className="category">{category}</h3>
      </section>
    </section>
  );
}

export default Product;