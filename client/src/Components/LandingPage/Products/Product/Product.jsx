/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import('./Product.css')

function Product({ data }) {
  return (
    <div className="card">
      <p className="category">{data.category}</p>
      <img src={data.product_img} alt={data.name} />
      <div className="card-body">
        <div className="row">
          <div className="card-title">
            <h4>{data.name}</h4>
            <h3>${data.price}</h3>
          </div>
          <div className="view-btn">
            <a href="">View Details</a>
          </div>
        </div>
        <hr />
        <p>{data.description}</p>
        <div className="btn-group">
          <div className="btn">
            <a href="">Buy Now</a>
          </div>
          <a href=""> Cancel</a>
        </div>
      </div>
    </div>
  )
}

export default Product

/*
category
: 
"mobile"
description
: 
"mobile discription"
id
: 
1
name
: 
"product1"
price
: 
30
product_img
: 
*/
