/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
function FilterCategory({handleFilterCategory, category}) {
  return (
    <div className="filter-category-container" >
      <h2>Categories</h2>
      <p onClick={handleFilterCategory} style={ {color: category ==='all' ? '#007bff' : '#444' }} >all</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='laptop' ? '#007bff' : '#444' }} >laptop</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='mobile' ? '#007bff' : '#444' }} >mobile</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='accessories' ? '#007bff' : '#444' }} >accessories</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='watch' ? '#007bff' : '#444' }} >watch</p>
    </div>
  );
}

export default FilterCategory;
