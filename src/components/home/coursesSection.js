import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CoursesSection() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    //.now-ui-icons.arrows-1_minimal-right
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title bg-white text-center text-primary px-3">
                            <b><i class="now-ui-icons text_align-cente"></i>Courses</b>
                        </h5>
                        <h3 className="mb-3"><i class="bi bi-heart-arrow"></i><b>Popular Courses</b></h3>
                    </div>
                    <div className="col text-end text-primary mb-2">
                        <Link to='/courses'><span style={{"fontSize":"15px"}}><u><b>View All</b></u></span></Link>
                        
                    </div>
                    <Carousel responsive={responsive} className='p-3'>
                        <div className='card col-11'>
                            <div className="position-relative">
                                <img className="img-fluid mt-2" src={require("assets/img/bgn2.webp")} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4 set-position"
                                  
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
                        <div className='card col-11'>
                            <div className="position-relative">
                                <img className="img-fluid mt-2" src={require("assets/img/bgn2.webp")} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4 set-position"
                                   
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
                        <div className='card col-11'>
                            <div className="position-relative">
                                <img className="img-fluid mt-2" src={require("assets/img/bgn2.webp")} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4 set-position"
                                   
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
                        <div className='card col-11'>
                            <div className="position-relative">
                                <img className="img-fluid mt-2" src={require("assets/img/bgn2.webp")} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 text-center mb-4 set-position"
                                   
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
                    </Carousel>


                </div>
            </div>
            
        </>
    )
}
