import Products from './Products/Products';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Cart.css';

function Cart() {
  return (
    <section className="products-container">
      <Header />
      <Products />
      <Footer />
    </section>
  );
}

export default Cart;
