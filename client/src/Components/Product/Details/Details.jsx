import axios from 'axios';

function Details({ data }) {
  const addToCart = (id) => {
    axios.post('/api/v1/cart', { productId: id });
  };

  return (
    <section id="product-details">
      <div className="img-div">
        <img src={data.product_img} alt={data.name} />
      </div>
      <div className="details-info">
        <h1>{data.name}</h1>
        <h2>{data.category}</h2>
        <p>{data.description}</p>
        <h3>{data.price}</h3>
        <button type="button" onClick={() => addToCart(data.id)}>
          add to cart
        </button>
      </div>
    </section>
  );
}

export default Details;
