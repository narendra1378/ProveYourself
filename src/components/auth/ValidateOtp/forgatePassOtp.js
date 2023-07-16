import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components


// core components


function ForgatePassOtp() {
    const [error, setError] = useState({
        email: false,
        otp:false,
        password: false,
        confirm_password: false,
      });
    
      const [formData, setFormData] = useState({
        otp:'',
        email: '',
        password: '',
        confirm_password: '',
      });
    
      const onInputChannge = (e) => {
        const { value, name } = e.target;
        console.log("name=", name, "value=", value)
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: false });
      }
    
      const submitForm = (e) => {
        e.preventDefault();
      
        if (!formData?.email) {
            setError({ ...error, email: true , message:'Require'});
            return;
          }

        if (!formData?.otp) {
          setError({ ...error, otp: true , message:"Require"})
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
      }

  
  const onChangeInput = (e) => {
    const { value, name } = e.target;
    console.log("name=", name, "value=", value)
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: false });
  }

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form mt-5 mb-5">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">New Password</h3>
            <div className="form-group mt-3">
            <label>Email<span className='text-danger'>*</span></label><span className='text-danger'>{error?.email ? `${error.message}` : ""}</span>
              <input
                type="email"
                name="email"
                onChange={(e)=>{
                   onChangeInput(e);
                }}
                className={`form-control mt-1 ${error.email ? 'border border-danger' : ' '}`}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
            <label>OTP<span className='text-danger'>*</span></label><span className='text-danger'>{error?.otp ? `${error.message}` : ""}</span>
              <input
                type="text"
                name="otp"
                className={`form-control mt-1 ${error.otp ? 'border border-danger' : ' '}`}
                onChange={(e)=>{
                    onChangeInput(e);
                 }}
                placeholder="Enter Otp"
              />
            </div>
            <div className="form-group mt-3">
            <label>Password<span className='text-danger'>*</span></label><span className='text-danger'>{error?.password ? `${error.message}` : ""}</span>
              <input
                type="password"
                name='password'
                className={`form-control mt-1 ${error.password ? 'border border-danger' : ' '}`}
                onChange={(e)=>{
                    onChangeInput(e);
                 }}
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
            <label>Confirm Password<span className='text-danger'>*</span></label><span className='text-danger'>{error?.confirm_password ? `${error.message}` : ""}</span>
              <input
                type="confirm_password"
                name="confirm_password"
                className={`form-control mt-1 ${error.confirm_password ? 'border border-danger' : ' '}`}
                onChange={(e)=>{
                    onChangeInput(e);
                 }}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={(e)=>{
                submitForm(e);
              }}>
                Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default  ForgatePassOtp;
