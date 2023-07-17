import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'

export default function Instructor() {
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
                            <b>Instructor</b>
                        </h5>
                        <h3 className="mb-3"><i class="bi bi-heart-arrow"></i><b>Expert Instructors</b></h3>
                    </div>
                   
                    <Carousel responsive={responsive} className='p-3'>
                        <div className='card col-11 custom-card' >
                            <img className="img-fluid mt-1" src={require("assets/img/julie.jpg")} alt="" />
                            <h3 className='text-center'><b>john marcus</b></h3>
                            <p className='text-center'>designnation</p>
                        </div>
                        <div className='card col-11'>
                            <img className="img-fluid mt-1" src={require("assets/img/ryan.jpg")} alt="" />
                            <h3 className='text-center'><b>john marcus</b></h3>
                            <p className='text-center'>designnation</p>
                        </div>
                        <div className='card col-11'>
                            <img className="img-fluid mt-1" src={require("assets/img/eva.jpg")} alt="" />
                            <h3 className='text-center'><b>john marcus</b></h3>
                            <p className='text-center'>designnation</p>
                        </div>
                        <div className='card col-11 custom-card' >
                            <img className="img-fluid mt-1" src={require("assets/img/julie.jpg")} alt="" />
                            <h3 className='text-center'><b>john marcus</b></h3>
                            <p className='text-center'>designnation</p>
                        </div>
                        <div className='card col-11'>
                            <img className="img-fluid mt-1" src={require("assets/img/ryan.jpg")} alt="" />
                            <h3 className='text-center'><b>john marcus</b></h3>
                            <p className='text-center'>designnation</p>
                        </div>
                    </Carousel>
                </div>
            </div>

        </>
    )
}


