/* eslint-disable jsx-a11y/label-has-associated-control */

function FilterPrice({ changeFilterPrice }) {
  return (
    <div className="filter-price-container">
      <h4>sort :</h4>
      <button type="button" onClick={changeFilterPrice}>
        max
      </button>
      <button type="button" onClick={changeFilterPrice}>
        min
      </button>
    </div>
  );
}

export default FilterPrice;
