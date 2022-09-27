import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';

import('./filter.css');

function Filter() {
  return (
    <section className="Filter-container">
      <FilterCategory />
      <FilterPrice />
    </section>
  );
}

export default Filter;
