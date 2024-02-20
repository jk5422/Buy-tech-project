import axios from "axios";
import React, { useEffect, useState } from "react";
import 'react-dropdown/style.css';
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import * as Constant from '../Constant'

var userId = localStorage.getItem('userId');

export default function Address() {
  const [api, setApi] = useState([]);
  const [totalprc, setTotalprice] = useState([]);
  const [fullname, setfullname] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [model_name, setModel_name] = useState();
  const [product_id, setProductId] = useState();
  const [quantity, setQuantity] = useState();
  const [totalprice, setPrice] = useState();
  const [image, setImage] = useState();
  const [payment_method, setPayment_method] = useState();
 

  const navigate = useNavigate();

  const show = async () => {
    await axios.get(Constant.TotalQuantityUrl + userId).then((response) => {
      setApi(response.data);
    });
    // totalPrice();
  };

  const totalPrice = async () => {
    await axios.get(Constant.TotalPriceUrl + userId).then((response) => {
      setTotalprice(response.data);
    });
  };
  
  const insert_order = async () => {
    const data = {
      user_id: userId,
      fullname: fullname,
      phone: phone,
      location: location,
      city: city,
      pincode: pincode,
    };
    await axios.post(Constant.InsertOrderAddressUrl, data).then((response) => {
      setfullname("");
      setPhone("");
      setLocation("");
      setCity("");
      setPincode("");
    });
    show1();
    window.location.href = "thankyou";
  };

  const show1 = async () => {
    await axios.get(Constant.ShowCartUrl + userId).then((response) => {
      // setApi2(response.data);
      var i = 0
      for ( i=0; i < response.data.length; i++ ) {
        // console.log('get data..',response.data[i]);
        setModel_name(response.data[i].model_name);
        setQuantity(response.data[i].quantity);
        setPrice(response.data[i].totalprice);
        setImage(response.data[i].image);
        setProductId(response.data[i].product_id);
       
      }
    });
    
  };

  const onder_insert = async () => {
    
    const data1 = {
      user_id: userId,
      model_name: model_name,
      image: image,
      quantity: quantity,
      price: totalprice,
      payment_methods:payment_method,
      product_userId:product_id,
    };
    // console.log('mohitt...',data1);
    console.log('payment method',data1.payment_methods);
    await axios.post(Constant.InsertOrderUrl, data1 ,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      setModel_name("");
      setQuantity("");
      setPrice("");
      setImage(""); 
      setPayment_method(""); 
      setProductId(""); 
    insert_order();
    });
  };

  useEffect(() => {
    show();
    show1();
    totalPrice();
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
              <h2 class="mb-0 ">Order Page</h2>
            </div>
          </div>
        </div>
      </header>
    
    <section class="contact-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h2 className="">Address Details</h2>
          {/* <div class="col-lg-5 col-12 pe-lg-5"> */}
                            <div class="contact-info">
                                <h3 class="mb-4 text-success">We love to help you.</h3>

                                <p class="d-flex border-bottom pb-3 mb-4">
                                    <strong class="d-inline me-4">Name:</strong>
                                    <input type="text" className="form-control shadow-lg" placeholder="Full Name" value={fullname} onChange={(e)=>{setfullname(e.target.value);}}/>
                                  
                                </p>

                                <p class="d-flex border-bottom pb-3 mb-4">
                                    <strong class="d-inline me-4">Phone:</strong>
                                    <input type="text" className="form-control shadow-lg" placeholder="Phone" value={phone} onChange={(e)=>{setPhone(e.target.value);}}/>
                                </p>

                                <p class="d-flex">
                                    <strong class="d-inline me-4">Location:</strong>
                                    <textarea className="form-control shadow-lg" placeholder="Address here" value={location} onChange={(e)=>{setLocation(e.target.value);}}></textarea>
                                    
                                </p>

                                <p class="d-flex border-bottom pb-3 mb-4">
                                    <strong class="d-inline me-4">City:</strong>
                                    <input type="text"  className="form-control shadow-lg" placeholder="city" value={city} onChange={(e)=>{setCity(e.target.value);}}/>
                                </p>
                                <p class="d-flex border-bottom pb-3 mb-4">
                                    <strong class="d-inline me-4">Pincode:</strong>
                                    <input type="text" className="form-control shadow-lg" placeholder="Pincode" value={pincode} onChange={(e)=>{setPincode(e.target.value);}}/>
                                </p>
                            </div>
                        {/* </div> */}

          </div>
          <div className="col-md-6">
          <h2 className="ms-4">Payment</h2>
          <div className="card shadow-lg mt-5">
          <h5 className="mt-5 text-center">Total Items:<b className="text-success">{api?.data}</b></h5>
          
          <div className="container text-center mb-5 mt-2">
            <b>Total Price:</b>
        <NumericFormat
                        value={totalprc?.data}
                        thousandsGroupStyle="lakh"
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) =>  <b className="text-success"> ₹ {value}</b>}
                      />
        </div>

        <h5 className="mt-5 text-center text-secondary">Payment Methods</h5>
        <div className="w-35 mx-auto mt-3 mb-5"> 
        <p className="fw-bold text-dark">Which service are you interested in?</p>

     <select onChange={(e)=>{setPayment_method(e.target.value);}} className="ms-5"  id="colours">
        <option value="Cash On Delivery">Cash On Delivery</option>
        <option value="Online Payment">Online Payment</option>
      </select>
    
      </div>
          </div>
          </div>
          <div className="text-end">
            <button className="btn btn-success" onClick={() => onder_insert()}>Place Order</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
