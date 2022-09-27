import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product/Product';
import Filter from './Filter/Filter';

import('./Products.css');

function Products() {
  const [newData, setNewData] = useState([]);
  const [category, setCategory] = useState('all');

  const handleFilterCategory = (e) => setCategory(e.target.textContent);

  useEffect(() => {
    axios.get('/api/v1/products').then(({ data }) => setNewData(data.data));
  }, []);

  if (!newData.length) return <p>Loading ...</p>;
  return (
    <section className="products-filter-container">
      <Filter handleFilterCategory={handleFilterCategory} category={category} />
      <div className="products-container">
        {category !== 'all'
          ? newData.filter((ele)=> ele.category ===category).map((ele) => <Product data={ele} key={ele.id} />)
          : newData.map((ele) => <Product data={ele} key={ele.id} />)}
      </div>
    </section>
  );
}

export default Products;
