import React, { useEffect, useState } from "react";
import verified from "../../assents/images/verified.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Constant from '../Constant';

var userId = localStorage.getItem('userId');

export default function Shopping() {
  const [api, setApi] = useState([]);

  const [image, setImage] = useState();
  const [model_name, setModel_name] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  const show = async () => {
    await axios.get(Constant.AllProductUrl).then((response) => {
      setApi(response.data);
    });
  }

  const addtocart = async (items) => {
    {if(userId){
    const data = {
      image: items.image,
      model_name: items.model_name,
      price: items.price,
      user_id: userId,
      product_id: items.id,
      // totalprice: price,
    };
    console.log('user data', data)
    await axios.post(Constant.InsertCartUrl, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      setImage("");
      setModel_name("");
      setPrice("");
      show();
      goToTop();
    });
    navigate('/cart');
  }else{
    // alert('Please Login First');
    window.location.href = "/login";
  }
}

const Empty = (val) => {
  }

  }

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

  const wishlist = async (items) => {
    const data = {
      product_id: items.id,
      image: items.image,
      model_name: items.model_name,
      price: items.price,
      user_id: userId,
      // totalprice: price,
    };
    console.log('user data', data)
    await axios.post(Constant.InsertWishlistUrl, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      setImage("");
      setModel_name("");
      setPrice("");
      show();
    });
    goToTop();
    navigate('/');
  }

  useEffect(() => {
    show();
  },[])
  return (
    <div>
      <header class="site-header d-flex flex-column justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center">
              <h2 class="mb-0">Shopping Page</h2>
            </div>
          </div>
        </div>
      </header>

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
                <div class="custom-block custom-block-full" >
                  <div class="custom-block-image-wrap">
                    <a>
                      <img
                        src={'http://127.0.0.1:8000/images/product/' + items.image}
                        style={{ height: "350px", width: "350px" }}
                        class="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="custom-block-info">
                    <h5 class="mb-2">
                      <Link to={'/detailpage/' + items.id} onClick={goToTop2}>{items.model_name}</Link>
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
                      <Link class="btn custom-btn" onClick={() => addtocart(items)}>
                        Add to Cart
                      </Link>
                    </div>
                  </div>

                  <div class="social-share d-flex flex-column ms-auto">
                    <Link href="#" class="badge ms-auto" onClick={() => wishlist(items)}>
                      <i class="bi-heart"></i>
                    </Link>
                  </div>
                </div>
              </div>


            ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
