import React from 'react';
import { Row, Col } from 'reactstrap';
// backgroundColor:"#2CA8FF" 
const AboutUs = () => {
  return (
    // <div style={{ paddingLeft: '20px', paddingRight: '20px' , backgroundColor:"black"  , color: "white"}}>
    //   <Row>
    //     <Col xs="12" md="4" className='mt-2'>
    //       <h2>Our Services</h2>
    //       <p>Explore our wide range of coaching services tailored to meet your specific needs:</p>
    //       <ul>
    //         <li>One-on-one coaching</li>
    //         <li>Group coaching sessions</li>
    //         <li>Specialized workshops</li>
    //       </ul>
    //     </Col>

    //     <Col xs="12" md="4" className='mt-2'>
    //       <h2>About Us</h2>
    //       <p>Welcome to our coaching website! We are dedicated to providing high-quality coaching services to help you achieve your goals. Our experienced coaches are here to support and guide you every step of the way.</p>
    //       <p>Feel free to browse through our website to learn more about our coaching programs and how we can help you. If you have any questions or would like to get started, please don't hesitate to contact us. We look forward to working with you!</p>
    //     </Col>

    //     <Col xs="12" md="4" className='mt-2'>
    //       <h2>Contact Us</h2>
    //       <p>If you have any inquiries or would like to schedule a coaching session, please feel free to reach out to us:</p>
    //       <ul>
    //         <li>Email: info@coachingwebsite.com</li>
    //         <li>Phone: (123) 456-7890</li>
    //         <li>Address: 123 Coaching Street, City, Country</li>
    //       </ul>
    //     </Col>
    //   </Row>
    // </div>
    <>
      <div
        className="container-fluid bg-dark text-light  pt-1 mt-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </>
  );
};

export default AboutUs;
