/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container , Button } from "reactstrap";
// core components

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter d-flex align-items-center justify-content-center"
        filter-color="blue"
        style={{
          minHeight:"70vh"
        }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bgn2.webp") + ")",
            opacity:0.9,
          }}
          ref={pageHeader}
        ></div>
        <div className="overlay"></div> {/* Add an overlay element */}
        <Container className="position-relative">
          <div className="content-center brand text-center">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            />
            <div className="brand-text">
              <h1 className="h1-seo"><b>Prove YourSelf</b></h1>
              <h3>"Unlock Your Potential, Embrace Excellence"</h3>
              <Link to='/register'>
              <Button className="btn-round" style={{color : "black", fontWeight:"bold" , backgroundColor:"white" ,fontSize:"15px", width:"30%"}} color="" type="button">
                 Join Us
              </Button>
              </Link>
              <br />
              <Link to='/opening'>
              <Button className="btn-round" style={{color : "black", fontWeight:"bold" , backgroundColor:"white" ,fontSize:"15px", width:"30%"}} color="" type="button">
                 Check New Opening 
              </Button>
              </Link>
              {/* <h6 className="category category-absolute mt-3">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              />
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              />
            </a>
            .
          </h6> */}
            </div>
          </div>
        
        </Container>
      </div>
    </>
  );
}

export default Header;
