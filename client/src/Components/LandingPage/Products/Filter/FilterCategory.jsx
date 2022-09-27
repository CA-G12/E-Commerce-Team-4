/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
function FilterCategory({handleFilterCategory, category}) {
  return (
    <div>
      <h4>Select Category</h4>
      <p onClick={handleFilterCategory} style={ {color: category ==='all' ? '#00523E' : '#444' }} >all</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='laptop' ? '#00523E' : '#444' }} >laptop</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='mobile' ? '#00523E' : '#444' }} >mobile</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='accessories' ? '#00523E' : '#444' }} >accessories</p>
      <p onClick={handleFilterCategory} style={ {color: category ==='watch' ? '#00523E' : '#444' }} >watch</p>
    </div>
  );
}

export default FilterCategory;
