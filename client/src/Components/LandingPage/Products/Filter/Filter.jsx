/* eslint-disable react/prop-types */
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';

import('./filter.css');

function Filter({ handleFilterCategory, category, changeFilterPrice }) {
  return (
    <section className="Filter-container">
      <FilterCategory
        handleFilterCategory={handleFilterCategory}
        category={category}
      />
      <FilterPrice changeFilterPrice={changeFilterPrice} />
    </section>
  );
}

export default Filter;
