import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components


// core components


function ValidateOpt() {
    const [error, setError] = useState({
        otp: false,
    });

    const [formData, setFormData] = useState({
        otp: '',
    });

    const onInputChannge = (e) => {
        const { value, name } = e.target;
        console.log("name=", name, "value=", value)
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: false });
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (!formData?.otp) {
            setError({ ...error, otp: true, message: "Require" })
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
                        <h3 className="Auth-form-title">Validate OTP</h3>

                        <div className="form-group mt-3">
                            <label>OTP<span className='text-danger'>*</span></label><span className='text-danger'>{error?.otp ? `${error.message}` : ""}</span>
                            <input
                                type="text"
                                name="otp"
                                className={`form-control mt-1 ${error.otp ? 'border border-danger' : ' '}`}
                                onChange={(e) => {
                                    onInputChannge(e);
                                }}
                                placeholder="Enter Otp"
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={(e) => {
                                submitForm(e);
                            }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ValidateOpt;
