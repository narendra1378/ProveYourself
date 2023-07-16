import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components


// core components


function Login() {


  
  const onChangeInput = (e) => {
    console.log("hiii", e);
  }

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form mt-5 mb-5">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-start">
              <Link className="text-dark" to='/register'><small>
                  <b>I don't have an Account</b></small></Link>
                
              </span>
              <span className="text-end">
                
                <Link to="/forgate-password"><small>
                  <b>Forgate Password</b></small></Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
