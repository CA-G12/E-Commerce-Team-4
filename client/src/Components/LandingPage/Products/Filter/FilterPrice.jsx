/* eslint-disable jsx-a11y/label-has-associated-control */

function FilterPrice() {
  const handle = () => 'dadada'
  return (
    <div className="filter-price-container">
      <h4>Range Price</h4>
      <label htmlFor="points">Max Price:</label>
      <input
        type="range"
        name="points"
        min="0"
        max="10"
        value={7}
        onChange={handle}
      />
      <label htmlFor="points">Min Price:</label>
      <input
        type="range"
        name="points"
        min="0"
        max="10"
        value={0}
        onChange={handle}
      />
    </div>
  )
}

export default FilterPrice
