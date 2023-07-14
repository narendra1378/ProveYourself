import React from 'react'
import { Link } from 'react-router-dom'

export default function CoursesSection() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title bg-white text-center text-primary px-3">
                            <b>Courses</b>
                        </h5>
                        <h3 className="mb-5"><i class="bi bi-heart-arrow"></i><b>Popular Courses</b></h3>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="course-item shadow">

                                <div className="position-relative">
                                    <img className="img-fluid" src={require("assets/img/bgn2.webp")} alt="" />
                                    <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4"
                                        style={{
                                            "position": "absolute",
                                            "top": "190px",
                                            "textAlign": "center",
                                        }}
                                    >
                                        <Link
                                            href="#"
                                            className="btn btn-sm btn-primary px-3"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            Read More
                                        </Link>
                                        <Link
                                            href="#"
                                            className="btn btn-sm btn-primary px-3 ms-2"
                                            style={{ borderRadius: "30px" }}
                                        >
                                            join Now
                                        </Link>
                                    </div>

                                </div>

                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">
                                        Web Design &amp; Development Course for Beginners
                                    </h5>
                                </div>
                                <div className="d-flex border-top">
                                    <span className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-user-tie text-primary me-2" />
                                        {" "}John Doe
                                    </span>
                                    <span className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-clock text-primary me-2" />
                                        {" "}1.49 Hrs
                                    </span>
                                    <span className="flex-fill text-center py-2">
                                        <i className="fa fa-user text-primary me-2" />
                                        {" "}30 Students
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp my-image" data-wow-delay="0.1s">
                            <div className="course-item shadow ">


                                <div className="position-relative">
                                    <img className="img-fluid" src={require("assets/img/bgn2.webp")} alt=""  />
                               
                                <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4"
                                    style={{
                                        "position": "absolute",
                                        "top": "190px",
                                        "textAlign": "center",
                                    }}
                                >
                                    <Link
                                        href="#"
                                        className="btn btn-sm btn-primary px-3"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Read More
                                    </Link>
                                    <Link
                                        href="#"
                                        className="btn btn-sm btn-primary px-3 ms-2"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        join Now
                                    </Link>
                                </div>

                            </div>

                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">
                                    Web Design &amp; Development Course for Beginners
                                </h5>
                            </div>
                            <div className="d-flex border-top">
                                <span className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-user-tie text-primary me-2" />
                                    {" "}John Doe
                                </span>
                                <span className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-clock text-primary me-2" />
                                    {" "}1.49 Hrs
                                </span>
                                <span className="flex-fill text-center py-2">
                                    <i className="fa fa-user text-primary me-2" />
                                    {" "}30 Students
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="course-item shadow">

                            <div className="position-relative">
                                <img className="img-fluid" src={require("assets/img/bgn2.webp")} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4"
                                    style={{
                                        "position": "absolute",
                                        "top": "190px",
                                        "textAlign": "center",
                                    }}
                                >
                                    <Link
                                        href="#"
                                        className="btn btn-sm btn-primary px-3"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        Read More
                                    </Link>
                                    <Link
                                        href="#"
                                        className="btn btn-sm btn-primary px-3 ms-2"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        join Now
                                    </Link>
                                </div>

                            </div>

                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small className="fa fa-star text-primary" />
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">
                                    Web Design &amp; Development Course for Beginners
                                </h5>
                            </div>
                            <div className="d-flex border-top">
                                <span className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-user-tie text-primary me-2" />
                                    {" "}John Doe
                                </span>
                                <span className="flex-fill text-center border-end py-2">
                                    <i className="fa fa-clock text-primary me-2" />
                                    {" "}1.49 Hrs
                                </span>
                                <span className="flex-fill text-center py-2">
                                    <i className="fa fa-user text-primary me-2" />
                                    {" "}30 Students
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

        </>
    )
}
