import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import * as Constant from '../Constant';
var userId = localStorage.getItem('userId');

export default function Order() {
  const [api, setApi] = useState([]);

  const show_order = async () =>{
    await axios.get(Constant.ShowOrderUrl + userId).then((response) =>{
      setApi(response.data.data);
    });
    console.log('mohit',userId);
  }
  
 useEffect(() => {
  show_order();
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
            <h2 class="mb-0">Order Page</h2>
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
                  <th scope="col">Payment Methods</th>
                  <th scope="col">Order Status</th>
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
                      <a>{item.quantity}</a>
                      </h5>
                    </td>
                    <td>
                    <h6 className="mt-5">
                      <a>{item.payment_methods}</a>
                      </h6>
                    </td>
                    <td>
                    <h5 className="mt-5">
                      <a className="text-success">{item.order_status}</a>
                      </h5>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
  
      </section>
    </div>
  )
}
