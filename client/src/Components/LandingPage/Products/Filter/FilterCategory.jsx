/* eslint-disable jsx-a11y/label-has-associated-control */
function FilterCategory() {
  return (
    <div>
      <h4>Select Category</h4>
      <fieldset>
        <label htmlFor="cat">All</label>
        <input
          type="radio"
          name="cat"
          value="Mobile"
          checked
        />
      </fieldset>
      <fieldset>
        <label htmlFor="cat">Mobile</label>
        <input
          type="radio"
          name="cat"
          value="Mobile"
          checked
        />
      </fieldset>

      <fieldset>
        <label htmlFor="cat">Laptop</label>
        <input
          type="radio"
          name="cat"
          value="Laptop"
          checked={false}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="cat">Watch</label>
        <input
          type="radio"
          name="cat"
          value="Watch"
          checked={false}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="cat">Accessories</label>
        <input
          type="radio"
          name="cat"
          value="Accessories"
          checked={false}
        />
      </fieldset>

    </div>
  );
}

export default FilterCategory;
