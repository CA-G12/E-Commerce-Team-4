/* eslint-disable jsx-a11y/label-has-associated-control */

function FilterPrice({changeMinPrice,  changeMaxPrice, minPrice, maxPrice }) {
  return (
    <div className="filter-price-container">
      <h2>Price</h2>
      <label htmlFor="price">Max Price: {maxPrice}</label>
      <input type="range"
      name="price"
      step={50}
      min={`${minPrice}`}
      max="1500"
      value={maxPrice}
      onChange={changeMaxPrice} />

      <label htmlFor="price">Min Price: {minPrice}</label>
      <input type="range"
      name="price"
      step={50}
      min="0"
      max={`${maxPrice}`}
      value={minPrice}
      onChange={changeMinPrice} />
    </div>
  );
}

export default FilterPrice;
