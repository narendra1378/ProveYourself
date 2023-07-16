import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Opening() {
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
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title bg-white text-center text-primary px-3">
                            <b>Openings</b>
                        </h5>
                        <h3 className="mb-3"><i class="bi bi-heart-arrow"></i><b>Check New Vacancy</b></h3>
                    </div>
                    <div className="col text-end text-primary mb-2">
                        <Link to='/Opening'><span style={{"fontSize":"15px"}}><u><b>View All</b></u></span></Link>
                        
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
                                    
                                </div>
                                
                                <h3 className="text-center"><b>Infosys</b></h3>
                                <p className="text-center">For Fresher</p>
                                <p className="text-center">pkg</p>

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
                                    
                                </div>
                                
                                <h3 className="text-center"><b>Infosys</b></h3>
                                <p className="text-center">For Fresher</p>
                                <p className="text-center">pkg</p>

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
                                    
                                </div>
                                
                                <h3 className="text-center"><b>Infosys</b></h3>
                                <p className="text-center">For Fresher</p>
                                <p className="text-center">pkg</p>

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
                                    
                                </div>
                                
                                <h3 className="text-center"><b>Infosys</b></h3>
                                <p className="text-center">For Fresher</p>
                                <p className="text-center">pkg</p>

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
                                    
                                </div>
                                
                                <h3 className="text-center"><b>Infosys</b></h3>
                                <p className="text-center">For Fresher</p>
                                <p className="text-center">pkg</p>

                            </div>
                        </div>
                    </Carousel>


                </div>
            </div>
            
        </>
    )
}
