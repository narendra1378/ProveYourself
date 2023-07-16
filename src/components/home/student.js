import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'

export default function Students() {
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
                            <b>Placements</b>
                        </h5>
                        <h3 className="mb-3"><i class="bi bi-heart-arrow"></i><b>Our Student</b></h3>
                    </div>

                    <Carousel responsive={responsive} className='p-3'>
                        <div className="card col-11">
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid rounded-circle small-image mt-2" src={require("assets/img/profile.png")} alt="" />
                            </div>
                            <h3 className="text-center"><b>John Marcus</b></h3>
                            <p className="text-center">Current Company</p>
                            <p className="text-center">Designnation</p>
                        </div>
                      
                        <div className="card col-11">
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid rounded-circle small-image mt-2" src={require("assets/img/profile.png")} alt="" />
                            </div>
                            <h3 className="text-center"><b>John Marcus</b></h3>
                            <p className="text-center">Current Company</p>
                            <p className="text-center">Designnation</p>
                        </div>

                        <div className="card col-11">
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid rounded-circle small-image mt-2" src={require("assets/img/profile.png")} alt="" />
                            </div>
                            <h3 className="text-center"><b>John Marcus</b></h3>
                            <p className="text-center">Current Company</p>
                            <p className="text-center">Designnation</p>
                        </div>

                        <div className="card col-11">
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid rounded-circle small-image mt-2" src={require("assets/img/profile.png")} alt="" />
                            </div>
                            <h3 className="text-center"><b>John Marcus</b></h3>
                            <p className="text-center">Current Company</p>
                            <p className="text-center">Designnation</p>
                        </div>
                    </Carousel>
                </div>
            </div>

        </>
    )
}


