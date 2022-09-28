/* eslint-disable camelcase */
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import './Product.css';

function Product({ productId, product_img, title, price, category }) {
  const deleteProduct = (id) => axios.delete(`/api/v1/cart/${id}`);

  const handleDeletion = (e) => {
    const { id } = e.target.parentElement;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id)
            .then(() => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success',
                  'cool'
                );
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }
            })
            .catch((err) => {
              console.log(err);
              swalWithBootstrapButtons.fire(
                'Error occurred!',
                'Your file has not been deleted.',
                'error'
              );
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  };

  return (
    <section className="product-card">
      <section className="inner-cont">
        <img className="img-url" src={product_img} alt="" />
        <section className="other-info">
          <section className="header-cart">
            <h3 className="price">$ {price} </h3>
            <FaTrash
              className="trash"
              id={productId}
              onClick={handleDeletion}
            />
          </section>
          <h3 className="category">{category}</h3>
          <h3 className="title">{title}</h3>
          <section className="discount-info">
            <button className="buy-btn" type="button">
              Buy
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Product;
