import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Details from './Details/Details';

function Product() {
  const { id } = useParams();

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/product/${id}`)
      .then(({ data }) => setNewData(data.data));
  }, []);

  return (
    <div>
      <Header />
      {newData.length ? (
        <Details data={newData[0]} key={newData} />
      ) : (
        <div>not found data</div>
      )}
      <Footer />
    </div>
  );
}

export default Product;
