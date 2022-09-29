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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);

  const handleFilterCategory = (e) => setCategory(e.target.textContent);

  const changeMinPrice = (e) => {
    setMinPrice(e.target.value);
    console.log(e.target.value);
  };
  const changeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
    console.log(e.target.value);
  };

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
    <>
    <section className="products-filter-container">
      <Filter
        handleFilterCategory={handleFilterCategory}
        changeMinPrice={changeMinPrice}
        changeMaxPrice={changeMaxPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
        category={category}
      />

      <div className="products-container">
        {category !== 'all'
          ? [...newData, ...showMoreData]
              .filter(
                (ele) =>
                  ele.category === category &&
                  ele.price <= maxPrice &&
                  ele.price >= minPrice
              )
              .map((ele) => <Product obj={ele} key={ele.id} />)
          : [...newData, ...showMoreData]
              .filter((ele) => ele.price < maxPrice && ele.price > minPrice)
              .map((ele) => <Product obj={ele} key={ele.id} />)}
      </div>

    </section>

      <button id="show-more-btn" type="button" onClick={showMoreRequest}>
        {' '}
        Show More{' '}
      </button>
    </>

  );
}

export default Products;
