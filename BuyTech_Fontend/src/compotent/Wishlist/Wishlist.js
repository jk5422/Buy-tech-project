import React, { useEffect, useState } from "react";
// import apple from "../../assents/Downloads/apple14n.jpg";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { NumericFormat } from "react-number-format";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Constant from '../Constant'

var userId = localStorage.getItem('userId');

export default function Contact() {
  const [api, setApi] = useState([]);
  const [totalprc, setTotalprice] = useState([]);
  const [image, setImage] = useState();
  const [model_name, setModel_name] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  const show = async () => {
    await axios.get(Constant.ShowWishlistUrl + userId).then((response) => {
      setApi(response.data);
    });
    totalPrice();
  };
  const totalPrice = async () => {
    await axios.get(Constant.TotalPriceUrl + userId).then((response) => {
      setTotalprice(response.data);
    });
  };

  const Delete = async (id) => {
    await axios
      .post(Constant.DeleteWishlistUrl + id)
      .then((response) => {});
      window.location.href = "/wishlist";
      // navigate('/wishlist');
  };

  const addtocart = async (item) =>{
    const data ={
      product_id: item.product_id,
      image: item.image,
      model_name: item.model_name,
      price: item.price,
      user_id: item.user_id,
      // totalprice: price,
    };
    console.log('user data',data)
      await axios.post(Constant.InsertCartUrl, data ,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response)=>{
        setImage("");
        setModel_name("");
        setPrice("");
       
      });
      Delete(item.id);
      navigate('/cart');
    }

  useEffect(() => {
    show();
  },[]);
  return (
    <div>
      <header
        class="site-header d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "350px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center">
              <h2 class="mb-0">Wishlist Page</h2>
            </div>
          </div>
        </div>
      </header>

      <section class="contact-section section-padding pt-0">
        <div class="container">
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Items Name</th>
                  <th scope="col">Price</th>

                  <th scope="col">Remove</th>
                  <th scope="col">Items</th>
                </tr>
              </thead>
              <tbody>
                {api.map((item, i) => (
                  <tr>
                    <th scope="row">
                      <div className="mt-5">1</div>
                    </th>
                    <td>
                      {" "}
                      <img
                        src={
                          "http://127.0.0.1:8000/images/product/" +
                          item.image
                        }
                        class="custom-block-image img-fluid"
                        alt=""
                      />{" "}
                    </td>
                    <td>
                      <h5 className="mt-5">
                        <a>{item.model_name}</a>
                      </h5>
                    </td>
                    <td>
                      <NumericFormat
                        value={item.price}
                        thousandsGroupStyle="lakh"
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => (
                          <h6 className="mt-5 text-success">₹{value}</h6>
                        )}
                      />
                    </td>

                    <td>
                      <h2
                        className="mt-4"
                        onClick={() => {
                          Delete(item.id);
                        }}
                      >
                        <MdDelete />
                      </h2>
                    </td>
                    <td>
                      <h2 className="mt-4">
                        <div onClick={() => addtocart(item)}>
                          <FaShoppingCart size="1em" />
                        </div>
                      </h2>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container text-end">
          <NumericFormat
            value={totalprc?.data}
            thousandsGroupStyle="lakh"
            thousandSeparator=","
            displayType="text"
            renderText={(value) => <b>Total Price: ₹ {value}</b>}
          />
        </div>
        <div className="container text-end mt-3">
          <Link className="btn btn-warning fw-bold text-dark" to="/cart">Place Order</Link>
        </div>
      </section>
    </div>
  );
}
