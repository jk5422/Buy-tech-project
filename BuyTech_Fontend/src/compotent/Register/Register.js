import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { FormHelperText } from "@material-ui/core";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import * as Constant from '../Constant';

const Register = () => {
    const [errors, setErrors] = useState({});
    const [formData] = useState({});
    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
 
    const PostData = async () => {
      const data = {
        name,
        email,
        phone,
        password,
      };
      await axios
        .post(Constant.RegisterUrl, data)
        .then((res) => {
          setName();
          setEmail();
          setPhone();
          setPassword();
        });
      Navigate("login");
    };
    const validate = (data) => {
      const errors = {};
      if (!data.name) {
        errors.name = "Name is required";
      }
      if (!data.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid";
      }
      if (!data.phone) {
        errors.phone = "Phone is required";
      }
      if (!data.password) {
        errors.password = "Password is required";
      } else if (data.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      return errors;
    };
    const handleSubmit = () => {
      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        PostData();
      } else {
        console.log(formData);
        window.location.href = "login";
      }
    };

  return (

    <div>
      <header
        class="site-header d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "90px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center">
              {/* <h2 class="mb-0">Log In</h2> */}
            </div>
          </div>
        </div>
      </header>

   <div className="body">
        <div className="Input-Field">
            <h3>E-buytech</h3>
          <div style={{ color: "#255F51" ,marginBottom:"10px" }}>
            <h1>Register</h1>
          </div>
          <div>
            <div error={errors.name}>
              <TextField
                sx={{
                  border: "1px solid green",
                  borderRadius: 1,
                  width: "25%",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                color="success"
                margin="normal"
                size="small"
                value={formData.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errors.name && (
                <FormHelperText
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: " bold",
                  }}
                >
                  {errors.name}
                </FormHelperText>
              )}
            </div>
            <div error={errors.email}>
              <TextField
                sx={{
                  border: "1px solid green",
                  borderRadius: 1,
                  width: "25%",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="success"
                margin="normal"
                size="small"
                value={formData.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors.email && (
                <FormHelperText
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {errors.email}
                </FormHelperText>
              )}
            </div>
            <div error={errors.phone}>
              <TextField
                sx={{
                  border: "1px solid green",
                  borderRadius: 1,
                  width: "25%",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                color="success"
                margin="normal"
                size="small"
                value={formData.phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {errors.phone && (
                <FormHelperText
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: " bold",
                  }}
                >
                  {errors.phone}
                </FormHelperText>
              )}
            </div>
            <div error={errors.password}>
              <TextField
                sx={{
                  border: "1px solid green",
                  borderRadius: 1,
                  width: "25%",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                color="success"
                margin="normal"
                size="small"
                value={formData.password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errors.password && (
                <FormHelperText
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: " bold",
                  }}
                >
                  {errors.password}
                </FormHelperText>
              )}
            </div>
            <div>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid green",
                  borderRadius: 5,
                  marginTop: "20px",
                }}
                color="success"
                onClick={(e) => {
                  handleSubmit();
                }}
              >
                <b>Register</b>
              </Button>
            </div>
            <div style={{ color: "green", paddingTop: "8px" , marginBottom: "50px"}}>
              Already Have an a Account?{" "}
              <a href="/login">
                <b style={{ color: "blue" }}>Log In</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;