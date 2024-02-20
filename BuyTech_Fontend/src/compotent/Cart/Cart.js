import React, { useEffect, useState } from "react";
// import apple from "../../assents/Downloads/apple14n.jpg";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { NumericFormat } from "react-number-format";
import * as Constant from '../Constant';
var userId = localStorage.getItem('userId');

export default function Contact() {
  const [api, setApi] = useState([]);
  const [totalprc, setTotalprice] = useState([]);

  const show = async () => {
    await axios.get(Constant.ShowCartUrl + userId).then((response) => {
      setApi(response.data);
    });
    totalPrice();
  };
  const totalPrice = async () => {
    await axios.get(Constant.TotalPriceUrl + userId).then((response) => {
      setTotalprice(response.data);
    });
  };

  const Pluscart = async (id) => {
    await axios
      .post(Constant.PlusCartUrl + id)
      .then((response) => {});
      window.location.href = "/cart";
  }; 
  const minuscart = async (id) => {
    await axios
      .post(Constant.MinusCartUrl + id)
      .then((response) => {});
      window.location.href = "/cart";
  };
  
  const Delete = async (id) => {
    await axios
      .post(Constant.DeleteCartUrl + id)
      .then((response) => {});
      window.location.href = "/cart";
  };

  const data1 = () => {
      window.location.href = '/address'+ '';
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
              <h2 class="mb-0">Cart Page</h2>
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
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>

                  <th scope="col">Remove</th>
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
                        renderText={(value) => <h6  className="mt-5 text-success">₹{value}</h6>}
                      />
                    </td>
                    <td>
                      <h5 className="mt-5">
                        <div
                          class="input-group"
                          style={{
                            width: "15%",
                            position: "absolute",
                            marginLeft: "-25px",
                            marginTop: "-12px",
                          }}
                        >
                          <span class="input-group-btn">
                            <button
                              type="button"
                              class="quantity-left-minus btn btn-danger btn-number mt-1"
                              data-type="minus"
                              data-field=""
                              value={item.id}
                              onClick={() => {
                                minuscart(item.id);
                              }}
                            >
                              <span class="glyphicon glyphicon-minus">
                                &#8722;
                              </span>
                            </button>
                          </span>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            class="input-number ms-2 me-2 fw-bold"
                            value={item.quantity}
                            min="1"
                            max="100"
                            style={{ width: "40px" }}
                            onChange=""
                          />
                          <span class="input-group-btn">
                            <button
                              type="button"
                              class="quantity-right-plus btn btn-success btn-number mt-1"
                              data-type="plus"
                              value={item.id}
                              data-field=""
                              onClick={() => {
                                Pluscart(item.id);
                              }}
                            >
                              <span class="glyphicon glyphicon-plus">
                                &#43;
                              </span>
                            </button>
                          </span>
                        </div>
                      </h5>
                    </td>
                    <td>
                      <NumericFormat
                        value={item.totalprice}
                        thousandsGroupStyle="lakh"
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <h6  className="mt-5 text-success">₹{value}</h6>}
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
                        renderText={(value) =>  <b>Total Price: ₹ {value}</b>}
                      />
        </div>
        <div className="container text-end mt-3">
          <button className="btn btn-warning"><a className="text-dark fw-bold" onClick={()=>data1()}>Place Order</a></button>
        </div>
      </section>
    </div>
  );
}
