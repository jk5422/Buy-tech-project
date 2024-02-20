import React, { useEffect, useState } from "react";

import verified from "../../assents/images/verified.png";
import apple from "../../assents/Downloads/apple14n.jpg";
import laptop from "../../assents/Downloads/laptop.jpg";
import airbuds from "../../assents/Downloads/airbgus2.jpg";
import charger from "../../assents/Downloads/Charger.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Constant from '../Constant';

var userId = localStorage.getItem('userId');

export default function Home() {
  const [api, setApi] = useState([]);
  const [api2, setApi1] = useState([]);
  const [api3, setApi3] = useState([]);
  const [api4, setApi4] = useState([]);
  const [count, setCount] = useState("");
  const [laptopCount, setLaptopCount] = useState("");
  const [airbudCount, setAirbudCount] = useState("");
  const [chargerCount, setChargerCount] = useState("");
  const [wishlistCount, setWishlistCount] = useState("");
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [model_name, setModel_name] = useState();
  const [price, setPrice] = useState();

  const show = async () => {
    await axios.get(Constant.Products1Url).then((response) => {
      setApi(response.data);
    });
    getlaptop();
  };

  const getlaptop = async () => {
    await axios.get(Constant.Products2Url).then((response) => {
      setApi1(response.data);
    });
    getairbuds();
  };

  const getairbuds = async () => {
    await axios.get(Constant.Products3Url).then((response) => {
      setApi3(response.data);
    });
    getcharger();
  };

  const getcharger = async () => {
    await axios.get(Constant.Products4Url).then((response) => {
      setApi4(response.data);
    });
  };

  const topics = async () => {
    await axios.get(Constant.Count1Url).then((response) => {
      setCount(response.data);
    });
  };

  const laptopCtr = async () => {
    await axios.get(Constant.Count2Url).then((response) => {
      setLaptopCount(response.data);
    });
  };

  const chargerCtr = async () => {
    await axios.get(Constant.Count3Url).then((response) => {
      setChargerCount(response.data);
    });
  };

  const airbudCtr = async () => {
    await axios.get(Constant.Count4Url).then((response) => {
      setAirbudCount(response.data);
    });
  };

  const addtocart = async (items) => {
    var userId = localStorage.getItem('userId');
    const data = {
      image: items.image,
      model_name: items.model_name,
      price: items.price,
      user_id: userId,
      product_id: items.id,
      // totalprice: price,
    };
    console.log("user data", data);
    await axios
      .post(Constant.InsertCartUrl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage("");
        setModel_name("");
        setPrice("");
        show();
      });
    goToTop();
      navigate("/cart");
    
  };
  
  const addtocartHome = () => {
    window.location.href = "/login";
  };
  const wishlist = async (items) => {
    var userId = localStorage.getItem('userId');
    const data = {
      image: items.image,
      model_name: items.model_name,
      price: items.price,
      user_id: userId,
      // totalprice: price,
    };
    console.log("user data", data);
    await axios
      .post(Constant.InsertWishlistUrl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage("");
        setModel_name("");
        setPrice("");
        show();
      });
    goToTop();
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const goToTop2 = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  const wishlist_count = async () => {
    await axios.get(Constant.WishlistCountUrl).then((response) => {
      setWishlistCount(response.data);
    });
  };

  useEffect(() => {   
    show();
    topics();
    laptopCtr();
    airbudCtr();
    chargerCtr();
    wishlist_count();

  }, []);

  return (
    <>
      <div>
        <main>
          <section class="hero-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="text-center mb-5 pb-2">
                    <h1 class="text-white">Welcome to e-buyTech</h1>
                    <p class="text-white">
                      E-Buy: The One-stop Shopping Destination.
                    </p>

                    <a
                      href="#section_3"
                      class="btn custom-btn smoothscroll mt-3"
                    >
                      Start Buying
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="topics-section section-padding pb-0" id="section_3">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="section-title-wrap mb-5">
                    <h4 class="section-title">Topics</h4>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <Link class="custom-block custom-block-overlay" to={`mobile`}>
                    <a class="custom-block-image-wrap">
                      <img
                        src={apple}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div class="custom-block-info custom-block-overlay-info">
                      <h5 class="mb-1">
                        <a>Mobile</a>
                      </h5>
                      <p class="badge mb-0">{count?.data}+ Items</p>
                    </div>
                  </Link>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <Link class="custom-block custom-block-overlay" to={"laptop"}>
                    <a class="custom-block-image-wrap">
                      <img
                        src={laptop}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div class="custom-block-info custom-block-overlay-info">
                      <h5 class="mb-1">
                        <a href="listing-page.html">Laptop</a>
                      </h5>

                      <p class="badge mb-0">{laptopCount?.data}+ Items</p>
                    </div>
                  </Link>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <Link class="custom-block custom-block-overlay" to={"airbud"}>
                    <a class="custom-block-image-wrap">
                      <img
                        src={airbuds}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div class="custom-block-info custom-block-overlay-info">
                      <h5 class="mb-1">
                        <a href="listing-page.html">Airbuds</a>
                      </h5>

                      <p class="badge mb-0">{airbudCount?.data}+ Items</p>
                    </div>
                  </Link>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <Link
                    class="custom-block custom-block-overlay"
                    to={"charger"}
                  >
                    <a class="custom-block-image-wrap">
                      <img
                        src={charger}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>

                    <div class="custom-block-info custom-block-overlay-info">
                      <h5 class="mb-1">
                        <a href="listing-page.html">Charger</a>
                      </h5>

                      <p class="badge mb-0">{chargerCount?.data}+ Items</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section class="trending-podcast-section section-padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="section-title-wrap mb-5">
                    <h4 class="section-title">Trending Mobile's</h4>
                  </div>
                </div>

                {api.map((items, i) => (
                  <div class="col-lg-4 col-12 mb-4 mb-lg-0 mt-3">
                    <div class="custom-block custom-block-full">
                      <div class="custom-block-image-wrap">
                        <a>
                          <img
                            src={
                              "http://127.0.0.1:8000/images/product/" +
                              items.image
                            }
                            style={{ height: "350px", width: "350px" }}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="custom-block-info">
                        <h5 class="mb-2">
                          <Link
                            to={"shopping/detailpage/" + items.id}
                            onClick={goToTop2}
                          >
                            {items.model_name}
                          </Link>
                        </h5>

                        <div class="profile-block d-flex">
                          <p>
                            {items.brand}
                            <img
                              src={verified}
                              class="verified-image img-fluid ms-1"
                              alt=""
                            />
                            <strong>Price : ₹{items.price}</strong>
                          </p>
                        </div>

                        <p class="mb-0">{items.title}</p>

                        <div class="custom-block-bottom d-flex justify-content-between mt-3">
                        {userId ?    
                         <Link
                            class="btn custom-btn"
                            onClick={() => addtocart(items)}
                          >
                            Add to Cart
                          </Link>
                        :
                        <Link
                            class="btn custom-btn"
                            onClick={() => addtocartHome()}
                          >
                            Add to Cart
                          </Link>
                        } 
                        </div>
                      </div>
                      
                     
                      <div class="social-share d-flex flex-column ms-auto">
                      {/* {wishlistCount?.data}  */}
                      <Link
                          href="#"
                          class="badge ms-auto"
                          onClick={() => wishlist(items)}
                        >
                          <i class="bi-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section class="trending-podcast-section section-padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="section-title-wrap mb-5">
                    <h4 class="section-title">Trending Laptop's</h4>
                  </div>
                </div>

                {api2.map((items, i) => (
                  <div class="col-lg-4 col-12 mb-4 mb-lg-0 mt-3">
                    <div class="custom-block custom-block-full">
                      <div class="custom-block-image-wrap">
                        <a>
                          <img
                            src={
                              "http://127.0.0.1:8000/images/product/" +
                              items.image
                            }
                            style={{ height: "350px", width: "350px" }}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="custom-block-info">
                        <h5 class="mb-2">
                          <Link
                            to={"shopping/detailpage/" + items.id}
                            onClick={goToTop2}
                          >
                            {items.model_name}
                          </Link>
                        </h5>

                        <div class="profile-block d-flex">
                          <p>
                            {items.brand}
                            <img
                              src={verified}
                              class="verified-image img-fluid ms-1"
                              alt=""
                            />
                            <strong>Price : ₹{items.price}</strong>
                          </p>
                        </div>

                        <p class="mb-0">{items.title}</p>

                        <div class="custom-block-bottom d-flex justify-content-between mt-3">
                        {userId ?    
                         <Link
                            class="btn custom-btn"
                            onClick={() => addtocart(items)}
                          >
                            Add to Cart
                          </Link>
                        :
                        <Link
                            class="btn custom-btn"
                            onClick={() => addtocartHome()}
                          >
                            Add to Cart
                          </Link>
                        } 
                        </div>
                      </div>

                      <div class="social-share d-flex flex-column ms-auto">
                      <Link
                          href="#"
                          class="badge ms-auto"
                          onClick={() => wishlist(items)}
                        >
                          <i class="bi-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section class="trending-podcast-section section-padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="section-title-wrap mb-5">
                    <h4 class="section-title">Trending Airbuds</h4>
                  </div>
                </div>

                {api4.map((items, i) => (
                  <div class="col-lg-4 col-12 mb-4 mb-lg-0 mt-3">
                    <div class="custom-block custom-block-full">
                      <div class="custom-block-image-wrap">
                        <a>
                          <img
                            src={
                              "http://127.0.0.1:8000/images/product/" +
                              items.image
                            }
                            style={{ height: "350px", width: "350px" }}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="custom-block-info">
                        <h5 class="mb-2">
                          <Link
                            to={"shopping/detailpage/" + items.id}
                            onClick={goToTop2}
                          >
                            {items.model_name}
                          </Link>
                        </h5>

                        <div class="profile-block d-flex">
                          <p>
                            {items.brand}
                            <img
                              src={verified}
                              class="verified-image img-fluid ms-1"
                              alt=""
                            />
                            <strong>Price : ₹{items.price}</strong>
                          </p>
                        </div>

                        <p class="mb-0">{items.title}</p>

                        <div class="custom-block-bottom d-flex justify-content-between mt-3">
                        {userId ?    
                         <Link
                            class="btn custom-btn"
                            onClick={() => addtocart(items)}
                          >
                            Add to Cart
                          </Link>
                        :
                        <Link
                            class="btn custom-btn"
                            onClick={() => addtocartHome()}
                          >
                            Add to Cart
                          </Link>
                        } 
                        </div>
                      </div>

                      <div class="social-share d-flex flex-column ms-auto">
                      <Link
                          href="#"
                          class="badge ms-auto"
                          onClick={() => wishlist(items)}
                        >
                          <i class="bi-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section class="trending-podcast-section section-padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="section-title-wrap mb-5">
                    <h4 class="section-title">Trending Chargers</h4>
                  </div>
                </div>

                {api3.map((items, i) => {
                  return (
                    <div class="col-lg-4 col-12 mb-4 mb-lg-0 mt-3">
                      <div
                        class="custom-block custom-block-full"
                        to={"shopping/detailpage/" + items.id}
                      >
                        <div class="custom-block-image-wrap">
                          <a>
                            <img
                              src={
                                "http://127.0.0.1:8000/images/product/" +
                                items.image
                              }
                              style={{ height: "350px", width: "350px" }}
                              class="custom-block-image img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div class="custom-block-info">
                          <h5 class="mb-2">
                            <Link
                              to={"shopping/detailpage/" + items.id}
                              onClick={goToTop2}
                            >
                              {items.model_name}
                            </Link>
                          </h5>

                          <div class="profile-block d-flex">
                            <p>
                              {items.brand}
                              <img
                                src={verified}
                                class="verified-image img-fluid ms-1"
                                alt=""
                              />
                              <strong>Price : ₹{items.price}</strong>
                            </p>
                          </div>

                          <p class="mb-0">{items.title}</p>

                          <div class="custom-block-bottom d-flex justify-content-between mt-3">
                          {userId ?    
                         <Link
                            class="btn custom-btn"
                            onClick={() => addtocart(items)}
                          >
                            Add to Cart
                          </Link>
                        :
                        <Link
                            class="btn custom-btn"
                            onClick={() => addtocartHome()}
                          >
                            Add to Cart
                          </Link>
                        } 
                          </div>
                        </div>

                        <div class="social-share d-flex flex-column ms-auto">
                        <Link
                          href="#"
                          class="badge ms-auto"
                          onClick={() => wishlist(items)}
                        >
                          <i class="bi-heart"></i>
                        </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <script src="../../assents/js/jquery.min.js"></script>
        <script src="../../assents/js/bootstrap.bundle.min.js"></script>
        <script src="../../assents/js/owl.carousel.min.js"></script>
        <script src="../../assents/js/custom.js"></script>
      </div>
    </>
  );
}
