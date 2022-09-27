/* eslint-disable react/prop-types */
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';

import('./filter.css');

function Filter({ handleFilterCategory, category }) {
  return (
    <section className="Filter-container">
      <FilterCategory handleFilterCategory={handleFilterCategory} category={category}/>
      <FilterPrice />
    </section>
  );
}

export default Filter;
