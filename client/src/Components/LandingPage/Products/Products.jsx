import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product/Product';
import Filter from './Filter/Filter';

import('./Products.css');

function Products() {
  const [newData, setNewData] = useState([]);
  const [showMoreData, setShowMoreData] = useState([]);
  const [showMoreCounter, setShowMoreCounter] = useState(1);
  const [category, setCategory] = useState('all');

  const handleFilterCategory = (e) => setCategory(e.target.textContent);

  const changeFilterPrice = (e) => e.target.textContent;

  const showMoreRequest = () =>
    axios.get(`/api/v1/showMore/${showMoreCounter}`).then(({ data }) => {
      setShowMoreData([...showMoreData, ...data.data]);
      setShowMoreCounter(showMoreCounter + 1);
    });

  useEffect(() => {
    axios.get('/api/v1/products').then(({ data }) => setNewData(data.data));
  }, []);

  if (!newData.length) return <p>Loading ...</p>;
  return (
    <section className="products-filter-container">
      <Filter
        handleFilterCategory={handleFilterCategory}
        changeFilterPrice={changeFilterPrice}
        category={category}
      />

      <div className="products-container">
        {category !== 'all'
          ? [...showMoreData, ...newData]
              .filter((ele) => ele.category === category)
              .map((ele) => <Product data={ele} key={ele.id} />)
          : [...showMoreData, ...newData].map((ele) => (
              <Product data={ele} key={ele.id} />
            ))}
      </div>
      <button type="button" onClick={showMoreRequest}>
        {' '}
        Show More{' '}
      </button>
    </section>
  );
}

export default Products;
