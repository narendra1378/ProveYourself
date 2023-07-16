import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    confirm_password: false,
    mobile_no: false,
    reference_code: false,
    message: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    mobile_no: '',
    reference_code: '',
  });

  const onInputChannge = (e) => {
    const { value, name } = e.target;
    console.log("name=", name, "value=", value)
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: false });
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (!formData?.name || formData?.name.length < 3) {
      if (!formData?.name) {
        setError({ ...error, name: true, message: 'Require' })
      } else {
        setError({ ...error, name: true, message: "Name must be 3 char atleast" })
        console.log('hello');
      }
      console.log(formData?.name.length, error);
      return;
    }
    if (!formData?.mobile_no) {
      setError({ ...error, mobile_no: true , message:"Require"})
      return;
    }
    if (formData?.mobile_no) {
      const regex = /^[0-9]{10}$/; // Regular expression for 10-digit numeric mobile number
      if (!regex.test(formData?.mobile_no)) {
        setError({ ...error, mobile_no: true , message:"Enter valid number" })
        return;
      } 
    }
    if (!formData?.email) {
      setError({ ...error, email: true , message:'Require'});
      return;
    }
    if (!formData?.password) {
      setError({ ...error, password: true , message:'Require'});
      return;
    }
    if(formData?.password){
      if(formData?.password?.length < 8){
          setError({...error , password:true , message:"atleast 8 char"})
          return;
      }
    }
    if (!formData?.confirm_password) {
      setError({ ...error, confirm_password: true , message:"Require" });
      return;
    }
    if (formData?.password !== formData?.confirm_password) {
      setError({ ...error, confirm_password: true , message:"Password doesn't match"});
      return;
    }

    navigate("/verify-opt");
  }

  console.log(error)

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form mt-5 mb-5">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Name<span className='text-danger'>*</span></label><span className='text-danger'>{error?.name ? `${error.message}` : ""}</span>
              <input
                type="text"
                name="name"
                className={`form-control mt-1 ${error.name ? 'border border-danger' : ''}`}
                onChange={(e) => {
                  onInputChannge(e);
                }}
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile Number<span className='text-danger'>*</span></label><span className='text-danger'>{error?.mobile_no ? `${error.message}` : ""}</span>
              <input
                type="text"
                name="mobile_no"
                className={`form-control mt-1 ${error.mobile_no ? 'border border-danger' : ''}`}
                onChange={(e) => {
                  onInputChannge(e);
                }}
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email<span className='text-danger'>*</span></label><span className='text-danger'>{error?.email ? `${error.message}` : ""}</span>
              <input
                type="email"
                name="email"
                required
                className={`form-control mt-1 ${error.email ? 'border border-danger' : ''}`}
                onChange={(e) => {
                  onInputChannge(e);
                }}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password<span className='text-danger'>*</span></label><span className='text-danger'>{error?.password ? `${error.message}` : ""}</span>
              <input
                type="password"
                name="password"
                className={`form-control mt-1 ${error.password ? 'border border-danger' : ''}`}
                onChange={(e) => {
                  onInputChannge(e);
                }}
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password<span className='text-danger'>*</span></label><span className='text-danger'>{error?.confirm_password ? `${error.message}`  : ""}</span>
              <input
                type="password"
                name="confirm_password"
                className={`form-control mt-1 ${error.confirm_password ? 'border border-danger' : ''}`}
                onChange={(e) => {
                  onInputChannge(e);
                }}
                placeholder="Enter confirm password"
              />
            </div>

            <div className="form-group mt-3">
              <label>Refereance Code</label>
              <input
                type="text"
                name="reference_code"
                className="form-control mt-1"
                onChange={(e) => {
                  onInputChannge(e);
                }}
                placeholder="Enter reference code"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={(e) => {
                submitForm(e);
              }}>
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-start">
              <Link className="text-dark" to='/login'><small>
                  <b>Already have an Account</b></small></Link>
                
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
