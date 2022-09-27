/* eslint-disable jsx-a11y/anchor-is-valid */
import('./Product.css');

function Product() {
  return (
    // <div className="product-card">
    //   <p className="category">category</p>
    //   <img className="product-img" src="https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg" alt="" />
    //   <p className="product-name">name</p>
    //   <p className="product-description">description</p>
    //   <p className="product-price">30$</p>
    // </div>
    <div className="card">
      <p className="category">category</p>
      <img src="https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20211227/Nitro5-an515-58-rgbkb-black-modelmain.png" alt="product" />
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>acer netro 5 </h4>
            <h3>$1390</h3>
          </div>
          <div className="view-btn">
            <a href="">View Details</a>
          </div>
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          dignissimos.
        </p>
        <div className="btn-group">
          <div className="btn">
            <a href="">Buy Now</a>
          </div>
          <a href=""> Cancel</a>
        </div>
      </div>
    </div>
  );
}

export default Product;
