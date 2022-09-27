import { useState, useEffect } from 'react'
import Product from './Product/Product'
import Filter from './Filter/Filter'

import('./Products.css')

function Products() {
  const [newData, setNewData] = useState(null)

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then(({ data }) => setNewData(data))
  }, [])

  if (!newData) return <p>Loading ...</p>
  return (
    <section className="products-filter-container">
      <Filter />
      <div className="products-container">
        {newData.map((ele) => (
          <Product data={ele} key={ele.id} />
        ))}
      </div>
    </section>
  )
}

export default Products
