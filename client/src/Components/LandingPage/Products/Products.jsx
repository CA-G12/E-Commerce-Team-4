import Product from './Product/Product';
import Filter from './Filter/Filter';

import('./Products.css');

function Products() {
  return (
    <section className="products-filter-container">
      <Filter />
      <div className="products-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

export default Products;
