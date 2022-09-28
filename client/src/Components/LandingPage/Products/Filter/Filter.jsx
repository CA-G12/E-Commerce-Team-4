/* eslint-disable react/prop-types */
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';

import('./filter.css');

function Filter({ handleFilterCategory, category, changeMinPrice, changeMaxPrice,  minPrice ,maxPrice }) {
  return (
    <section className="Filter-container">
      <FilterCategory
        handleFilterCategory={handleFilterCategory}
        category={category}
      />
      <FilterPrice  changeMinPrice={changeMinPrice} changeMaxPrice={changeMaxPrice} minPrice={minPrice} maxPrice={maxPrice} />
    </section>
  );
}

export default Filter;
