import React, { useEffect, useState } from "react";
import logo from "../../assents/images/ABC.png";
import { Link } from "react-router-dom";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import axios from "axios";

var name = localStorage.getItem('name');
var userId = localStorage.getItem('userId');

export default function Header() {
  const [count, setCount] =  useState("");
  const [count1, setCount1] =  useState("");
  const cart_count = async () =>{
    await axios.get(`http://localhost/buy_tech/api/cart_count/${userId}`).then((response) => {
      setCount(response.data);
    });
  }
  const wishlist_count = async () =>{
    await axios.get(`http://localhost/buy_tech/api/wishlist_count/${userId}`).then((response) => {
      setCount1(response.data);
    });
  }


  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/login";
}


  useEffect(()=>{
    cart_count();
    wishlist_count();
  },[])
  return (
    
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand me-lg-5 me-0" to={"/"}>
            <img
              src={logo}
              class="logo-image img-fluid"
              alt="Mohit"
            />
          </Link>
            
          <form
            action="#"
            method="get"
            class="custom-form search-form flex-fill me-3"
            role="search"
          >
            <div class="input-group input-group-lg">
              <input
                name="search"
                type="search"
                class="form-control"
                id="search"
                placeholder="Search Product"
                aria-label="Search"
              />

              <button type="submit" class="form-control" id="submit">
                <i class="bi-search"></i>
              </button>
            </div>
          </form>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-lg-auto">
              <li class="nav-item">
                <Link class="nav-link active" to={"/"}>
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to={"about"}>
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to={"shopping"}>
                  Shopping
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to={"contact"}>
                  Contact
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to={"wishlist"}> 
                  <AiTwotoneStar size="1.7em"/>
                  <sup className="bg-danger p-1 rounded-5">{count1?.data}</sup>
                </Link>
                
                {userId ?                  <Link class="nav-link" to={"cart"}>
                  <FaShoppingCart size="1.4em" />
                  <sup className="bg-danger p-1 rounded-5">{count?.data}</sup>
                </Link>
                
                :
                ''
            }
             {userId ?
            <Link className="text-white" to={'order'}><FaShippingFast  size="1.4em"></FaShippingFast></Link>
             : ''} </li>
            </ul>
            {name ?
            <div class="ms-4">
              <button
                class="btn custom-btn custom-border-btn smoothscroll"
                onClick={() => LogOut()}
              >
              logout 
              </button>
              </div>
              :
              <div class="ms-4">
              <Link
                class="btn custom-btn custom-border-btn smoothscroll"
                to={"login"}
              >
              Get Login 
              </Link>
              </div>
            }
           
          </div>
        </div>
      
        <div className="ms-start"> {name ?  "Welcome": ""} <br></br> {name}</div>
      </nav>
    </div>
  );
}
