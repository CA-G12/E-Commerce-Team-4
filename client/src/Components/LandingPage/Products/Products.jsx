import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product/Product'
import Filter from './Filter/Filter'

import('./Products.css')

function Products() {
  const [newData, setNewData] = useState([])

  useEffect(() => {
    axios.get('/api/v1/products').then(({ data }) => setNewData(data.data))
  }, [])

  if (!newData.length) return <p>Loading ...</p>
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
