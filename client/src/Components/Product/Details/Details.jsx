import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Details({ data, status }) {
  const navigate = useNavigate();

  const addToCart = (id) => {
    if (status === 'authenticated') {
      navigate('/cart');
      axios.post('/api/v1/cart', { productId: id });
    } else navigate('/login');
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
        <h3>${data.price}</h3>
        <button type="button" onClick={() => addToCart(data.id)}>
          add to cart
        </button>
      </div>
    </section>
  );
}

export default Details;
