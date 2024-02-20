import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import verified from "../../assents/images/verified.png";
import axios from 'axios';
const baseURL = "http://127.0.0.1:8000/api/Products/4";



export default function Airbud() {
  const [api, setApi] = useState([]);

const show = async () =>{
    await axios.get(baseURL).then((response) => {
      setApi(response.data);
    });
  }

  
  useEffect(()=>{
    show();
  })
  return (
    
    <div>
       <header class="site-header d-flex flex-column justify-content-center align-items-center">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">

                            <h2 class="mb-0">Airbud Page</h2>
                        </div>

                    </div>
                </div>
            </header>
    
    <section class="topics-section section-padding pb-0" id="section_3">
     
<div class="container">
  <div class="row">
    <div class="col-lg-12 col-12">
      <div class="section-title-wrap mb-5">
        <h4 class="section-title">Topics</h4>
      </div>
    </div>

    {api.map((mobile,i)=>
     {
      return(
    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
   
      <Link class="custom-block custom-block-overlay"  onClick={(e) => {
                 e.preventDefault(mobile.id);
                  window.location.href='/shopping/detailpage/'+ mobile.id;
                        }} >
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
           src={'http://127.0.0.1:8000/images/product/' + mobile.image}
            style={{ height:"250px", width:"300px" }}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">{mobile.model_name}</a>
          </h5>

          <div class="profile-block d-flex">
                      <p>
                      {mobile.brand}
                        <img
                          src={verified}
                          class="verified-image img-fluid ms-1"
                          alt=""
                        />
                        <strong>Price : ₹{mobile.price}</strong>
                      </p>
                    </div>

                    <p class="mb-0">{mobile.title}</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
        </div>
      </Link>
 
    </div>
    )
  }
  )}

  </div>
</div>
</section>
</div>
  )
}
