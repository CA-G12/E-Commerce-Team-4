import Products from './Products/Products';
import Header from "./Header/Header";

function Cart() {
  return (
    <section className="products-container">
      <Header />
      <Products />
    </section>
  );
}

export default Cart;