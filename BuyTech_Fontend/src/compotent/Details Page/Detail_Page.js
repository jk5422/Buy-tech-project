import React, { useEffect, useState } from 'react';
import verified from "../../assents/images/verified.png";
import buy1 from "../../assents/images/iphone-14.jpg";
import buy2 from "../../assents/images/podcast/27670664_7369753.jpg";
import buy3 from "../../assents/images/podcast/12577967_02.jpg";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as Constant from '../Constant';

var userId = localStorage.getItem('userId');


export default function Detail_Page() {
  const { id, setId} = useParams();
  const [api,setApi] = useState();
  const [image, setImage] = useState();
  const [brand, setBrand] = useState();
  const [model_name, setModel_name] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [product_id, setProduct_id] = useState();
  
  const navigate = useNavigate();

  const addtocart = async () =>{
    const data ={
      product_id: product_id,
      image: image,
      model_name: model_name,
      price: price,
      user_id: userId,
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
        show();
        goToTop();
      });
      navigate('/cart');
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  const addtocartHome = () => {
    window.location.href = "/login";
  };

  const show = async () =>{
    await axios.get(Constant.DetailGetUrl + id).
    then((response) => {
      setApi(response.data);
      setImage(response.data[0].image)
      setBrand(response.data[0].brand)
      setModel_name(response.data[0].model_name)
      setPrice(response.data[0].price)
      setDescription(response.data[0].description)
      setProduct_id(response.data[0].id)
    
    });
  }

  

  useEffect(() => {
    show();
  }, [id]);


  return (
    <div>
      
      <header class="site-header d-flex flex-column justify-content-center align-items-center">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">

                            <h2 class="mb-0">Detail Page</h2>
                        </div>

                    </div>
                </div>
            </header>

        
            <section class="latest-podcast-section section-padding pb-0" id="section_2">
                <div class="container">
                    <div class="row justify-content-center">

                        <div class="col-lg-10 col-12">
                            <div class="section-title-wrap mb-5">
                                <h4 class="section-title">Details</h4>
                            </div>

                            <div class="row">
                            <div class="col-lg-12 col-12">
                                <div class="custom-block d-md-flex h-100">
                                    <div class="">
                                        <div class="custom-block-icon-wrap  text-center">
                                            <a class="custom-block-image-wrap">
                                                <img src={'http://127.0.0.1:8000/images/product/' + image}  style={{ height:"370px" , width:"430px" }}
                                                    class="custom-block-image-product-info mx-auto"  multiple  alt="Plaese wait..."/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="custom-block-info ms-5">
                                        <h5 class="mb-2">
                                            <a href="#">
                                          {brand}
                                            </a>
                                        </h5>
                        
                                        <h5 class="mb-2"> 
                                            <a href="#">
                                               Model:
                                            </a>
                                            <bold style={{ fontSize: "20px" }} >{model_name}</bold>
                                        </h5>

                                        <h5 class="mb-2"> 
                                            <a href="#">
                                               Desription:
                                            </a>
                                            <bold style={{ fontSize: "20px" }}>
                                              {description}
                                            </bold>
                                        </h5>
                                        <div class="custom-block-bottom d-flex justify-content-between mt-4">
                                            <a href="#" style={{ fontSize: "20px" }} class="bi bi-currency-rupee me-1">
                                            
                                            <b style={{ fontSize: "18px" ,color:'black'}} >{price}</b>
                                            </a>
                                        </div>
                                        <div class="mt-2 text-center mt-5">
                                            {userId ? 
                                              <a class="btn custom-btn " onClick={addtocart}>
                                                Add To Cart
                                            </a>
                                            :
                                            <a class="btn custom-btn " onClick={addtocartHome}>
                                            Add To Cart
                                        </a>
                                          }
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="related-podcast-section section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <div class="section-title-wrap mb-5">
                                <h4 class="section-title">Related Mobile's</h4>
                            </div>
                        </div>

                        
                        <div class="col-lg-4 col-12 mt-3">
                <div class="custom-block custom-block-full">
                  <div class="custom-block-image-wrap">
                    <a href="detail-page.html">
                      <img
                        src={buy3}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="custom-block-info">
                    <h5 class="mb-2">
                      <a href="detail-page.html">Nokia</a>
                    </h5>

                    <div class="profile-block d-flex">
                      <p>
                      Nokia
                        <img
                          src={verified}
                          class="verified-image img-fluid"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Offfers</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>

                  <div class="social-share d-flex flex-column ms-auto">
                    <a href="#" class="badge ms-auto">
                      <i class="bi-heart"></i>
                    </a>
                  </div>
                </div> 
              </div>


              <div class="col-lg-4 col-12 mt-3">
                <div class="custom-block custom-block-full">
                  <div class="custom-block-image-wrap">
                    <a href="detail-page.html">
                      <img
                        src={buy3}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="custom-block-info">
                    <h5 class="mb-2">
                      <a href="detail-page.html">Nokia</a>
                    </h5>

                    <div class="profile-block d-flex">
                      <p>
                      Nokia
                        <img
                          src={verified}
                          class="verified-image img-fluid"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Offfers</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>

                  <div class="social-share d-flex flex-column ms-auto">
                    <a href="#" class="badge ms-auto">
                      <i class="bi-heart"></i>
                    </a>
                  </div>
                </div> 
              </div>



              <div class="col-lg-4 col-12 mt-3">
                <div class="custom-block custom-block-full">
                  <div class="custom-block-image-wrap">
                    <a href="detail-page.html">
                      <img
                        src={buy3}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="custom-block-info">
                    <h5 class="mb-2">
                      <a href="detail-page.html">Nokia</a>
                    </h5>

                    <div class="profile-block d-flex">
                      <p>
                      Nokia
                        <img
                          src={verified}
                          class="verified-image img-fluid"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Offfers</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>

                  <div class="social-share d-flex flex-column ms-auto">
                    <a href="#" class="badge ms-auto">
                      <i class="bi-heart"></i>
                    </a>
                  </div>
                </div> 
              </div>



                    </div>
                </div>
            </section>
    </div>
  )
}
