import React from 'react';
import apple from "../../assents/Downloads/apple14n.jpg";
import laptop from "../../assents/Downloads/laptop.jpg";
import airbuds from "../../assents/Downloads/airbgus2.jpg";
import charger from "../../assents/Downloads/Charger.jpg";
import { Link } from 'react-router-dom';
import verified from "../../assents/images/verified.png";



export default function Topics() {
  return (
    
    <div>
       <header class="site-header d-flex flex-column justify-content-center align-items-center">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">

                            <h2 class="mb-0">Topics Page</h2>
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

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <Link class="custom-block custom-block-overlay"  onClick={(e) => {
                 e.preventDefault();
                  window.location.href='/shopping/detailpage';
                        }} >
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
            src={apple}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">Mobile</a>
          </h5>

          <div class="profile-block d-flex">
                      <p>
                        Apple
                        <img
                          src={verified}
                          class="verified-image img-fluid ms-1"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Selling</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
        </div>
      </Link>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <Link class="custom-block custom-block-overlay"  onClick={(e) => {
                 e.preventDefault();
                  window.location.href='/shopping/detailpage';
                        }} >
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
            src={apple}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">Mobile</a>
          </h5>

          <div class="profile-block d-flex">
                      <p>
                        Apple
                        <img
                          src={verified}
                          class="verified-image img-fluid ms-1"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Selling</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
        </div>
      </Link>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <Link class="custom-block custom-block-overlay"  onClick={(e) => {
                 e.preventDefault();
                  window.location.href='/shopping/detailpage';
                        }} >
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
            src={apple}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">Mobile</a>
          </h5>

          <div class="profile-block d-flex">
                      <p>
                        Apple
                        <img
                          src={verified}
                          class="verified-image img-fluid ms-1"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Selling</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
        </div>
      </Link>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <Link class="custom-block custom-block-overlay"  onClick={(e) => {
                 e.preventDefault();
                  window.location.href='/shopping/detailpage';
                        }} >
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
            src={apple}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">Mobile</a>
          </h5>

          <div class="profile-block d-flex">
                      <p>
                        Apple
                        <img
                          src={verified}
                          class="verified-image img-fluid ms-1"
                          alt=""
                        />
                        <strong>Price : ₹50,000</strong>
                      </p>
                    </div>

                    <p class="mb-0">Best Selling</p>

                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" class="btn custom-btn">
                        Add to Cart
                      </a>
                    </div>
        </div>
      </Link>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
            src={apple}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">Mobile</a>
          </h5>

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
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

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
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

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
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

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>


    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
          <img
            src={apple}
            class="custom-block-image img-fluid"
            alt=""
          />
        </a>

        <div class="custom-block-info custom-block-overlay-info">
          <h5 class="mb-1">
            <a href="listing-page.html">Mobile</a>
          </h5>

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
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
          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
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

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-4">
      <div class="custom-block custom-block-overlay">
        <a href="detail-page.html" class="custom-block-image-wrap">
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

          <p class="badge mb-0">Price : ₹50,000</p>
        </div>
      </div>
    </div>

    
  </div>
</div>
</section>
</div>
  )
}
