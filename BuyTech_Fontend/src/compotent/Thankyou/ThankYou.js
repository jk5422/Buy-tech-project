import React from "react";
import { Link } from "react-router-dom";
import "./thankyou.css";

function ThankYou() {


  return (


    <React.Fragment>

      <div class="content thankyoumt">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1 class="wrapperh1 mb-5">Thank you !</h1>
            <Link class="btn bg-gradiant" to="/">
              Go home
            </Link>
          </div>

        </div>
      </div>
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link>

    </React.Fragment>


  );
}

export default ThankYou;