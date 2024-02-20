import React from "react";
import "./login.css";
import { Button, TextField } from "@mui/material";
import { FormHelperText } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as Constant from '../Constant';
import { ToastContainer, toast } from "react-toastify";

import LoadingOverlay from "react-loading-overlay";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      email: "",
      password: "",
      role_id: "",
      isActive: false,

      emailError: null,
      passwordError: null,
    };
  }

  storeRoleId = async (roleId) => {
    try {
      localStorage.setItem("roleId", roleId);
      console.log(roleId);
    } catch (e) {}
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";

    var reg = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}");
    if (!this.state.email) {
      emailError = "Please Enter Email Address.";
    } else {
      if (!reg.test(this.state.email)) {
        emailError = "Please enter a valid Email Address.";
      }
    }

    if (!this.state.password) {
      passwordError = "Please Enter Password.";
    }

    if (emailError || passwordError) {
      this.setState({
        emailError,
        passwordError,
      });

      return false;
    }

    return true;
  };

  onSubmit = () => {
    if (this.validate()) {
      this.setState({
        emailError: null,
        passwordError: null,
      });
      this.onLogin();
    }
  };

  storeUserId = async (userId) => {
    try {
      localStorage.setItem("userId", userId);
      console.log(userId);
    } catch (e) {}
  };
  storeUserName = async (name) => {
    try {
      localStorage.setItem("name", name);
      console.log(name);
    } catch (e) {}
  };

  onLogin = async () => {
    this.setState({ isLoading: true, isActive: true });

    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    await fetch(Constant.LoginUrl, {
      method: "POST",
      body: formData,
    })
      .then((Response) => Response.json())
      .then((data) => {
        // console.log(data.data)
        if (data.success === true) {
          this.storeRoleId(data.data.role_id);
          this.storeUserId(data.data.id);
          this.storeUserName(data.data.name);
          this.setState({
            email: "",
            password: "",
            isLoading: false,
            isActive: false,
          });

          if (data.data.role_id === 3) {
            // window.location.href = Constant.BaseUrl + "student-dashboard"
          } else if (data.data.role_id === 4) {
            // window.location.href = Constant.BaseUrl + "tutor-dashboard"
            // navigate("/tutor-dashboard");
          } else {
            window.location.href = "/";
            // navigate("/");
          }
        } else {
          this.setState({
            isActive: false,
          });
          toast.error(data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  render() {
    return (
      <LoadingOverlay
      active={this.state.isActive}
        spinner
        fadeSpeed={10}
        text="Logining..."  
      >
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
          <div className="Input-Field container">
          <ToastContainer style={{ height:'30px', width:'30px' }} />
            <div style={{ color: "#255F51" }}>
              <h1>Log In</h1>
            </div>
            <div>
              <div>
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
                  label="Email..."
                  variant="outlined"
                  color="success"
                  margin="normal"
                  size="small"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                }
                />
                {!!this.state.emailError && (
                  <FormHelperText
                    style={{
                      textAlign: "center",
                      color: "red",
                      fontWeight: " bold",
                    }}    >
                    {this.state.emailError}
                  </FormHelperText>
                )}
              </div>
              <div>
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
                  label="Password..."
                  type="password"
                  variant="outlined"
                  color="success"
                  margin="normal"
                  size="small"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                }
                />
                {!!this.state.passwordError && (
                  <FormHelperText
                    style={{
                      textAlign: "center",
                      color: "red",
                      fontWeight: " bold",
                    }}
                  >
                    {this.state.passwordError}
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
                  onClick={() => this.onSubmit()}
                >
                  <b>Log In</b>
                </Button>
              </div>
              <div
                style={{
                  color: "green",
                  paddingTop: "8px",
                  marginBottom: "50px",
                }}
              >
                Don't Have An Account?{" "}
                <Link to={"/register"}>
                  <b style={{ color: "red" }}>Create Account</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}

export default Login;
