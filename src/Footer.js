import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const Footer = () => {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  return (
    <Container fluid className="py-4 bg-pink-300">
      {/* Responsive Layout for xsm screens */}
      <div className="d-block d-md-none text-left">
      <div className="order-first text-center">
    <h5 className="text-white font-bold">GET LATEST STORIES</h5>
    <p className="text-white text-sm">
      Share store details, promotions, or brand content with your customers.
    </p>
    
    <div className="d-flex flex-row align-items-center justify-content-center w-100">
      <Button
        style={{
          backgroundColor: "white",
          width: "70%",
          height:"50px",
          color: "black",
          border: "1px black solid",
          borderRadius: "0px",
          outline: "none",
          boxShadow: "none",
         
        }}
      >
        Enter Your Email Address
      </Button>
      <Button
        style={{
          backgroundColor: "black",
          width: "30%",
          height:"50px",
          color: "white",
          fontWeight: "bold",
          borderRadius: "0px",
          border: "1 px solid black",
          outline: "none",
          boxShadow: "none",
        }}
      >
        SUBMIT
      </Button>
    </div>
    <br></br>
    <br></br>
  </div>
      <div className="d-flex justify-content-start">
        <img 
          src="https://shopblissfulbeauty.com/cdn/shop/files/LOGO_420x.png?v=1732087575" 
          alt="Logo"
          className="h-[150px] w-auto "
        />
        </div>
        <br></br>
        <br></br>
        {/* Quick Links Section */}
        <div className=" py-2">
          <div className="d-flex justify-content-between align-items-center" onClick={() => setQuickLinksOpen(!quickLinksOpen)}>
            <h5 className="mb-0 text-white">QUICK LINKS</h5>
            {quickLinksOpen ? <IoIosRemove size={20} color="white" /> : <IoIosAdd size={20} color="white"/>}
          </div>
          {quickLinksOpen && (
            <ul className="list-unstyled mt-2">
              <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
              <li className="text-white">Shop All</li>
              <li><Link to="/ABOUTUS" className="text-decoration-none text-white">About Us</Link></li>
              <li><Link to="/CONTACTUS" className="text-decoration-none text-white">Contact Us</Link></li>
            </ul>
          )}
        </div>

        {/* User Info Section */}
        <div className="border-top border-bottom py-2">
          <div className="d-flex justify-content-between align-items-center" onClick={() => setUserInfoOpen(!userInfoOpen)}>
            <h5 className="mb-0 text-white">USER INFO</h5>
            {userInfoOpen ? <IoIosRemove size={20} color="white"/> : <IoIosAdd size={20} color="white" />}
          </div>
          {userInfoOpen && (
            <ul className="list-unstyled mt-2">
              <li><Link to="/PrivacyPolicy" className="text-decoration-none text-white">Privacy Policy</Link></li>
              <li><Link to="/TermsOfService" className="text-decoration-none text-white">Terms of Service</Link></li>
              <li><Link to="/RefundPolicy" className="text-decoration-none text-white">Refund Policy</Link></li>
              <li><Link to="/ShippingPolicy" className="text-decoration-none text-white">Shipping Policy</Link></li>
            </ul>
          )}
        </div>
        <br></br>

        {/* Contact Info Section */}
        <div className=" py-2 mb-2">
          <h5 className="mb-2 text-white">CONTACT INFO</h5>
          <p className="mb-2 text-white">📍 Lahore, Pakistan</p>
          <p className="mb-2 text-white">📞 +92 333 1234567</p>
          <p className="mb-2 text-white">✉ blissfulbeautypakistan@gmail.com</p>
        </div>

        <div className="flex items-center justify-center gap-3">
      
            
      
              
               <a href ="https://api.whatsapp.com/send/?phone=%2B923331371383&text&type=phone_number&app_absent=0"><FaWhatsapp className="text-xl cursor-pointer text-white" /></a>
                <a href ="https://www.facebook.com/blissfulbeautypakistan?mibextid=ZbWKwL"><FaFacebookF className="text-xl cursor-pointer text-white" /></a>
                <a href ="https://www.instagram.com/blissfulbeautypakistan/"><FaInstagram className="text-xl cursor-pointer text-white" /></a>
      
                   
      
                      
      
            </div>

      </div>

      {/* Desktop Layout (md & lg) remains unchanged */}
      <Row className="d-none d-md-flex justify-content-center text-white">
        <Col xs={12} md={11} lg={11} className="d-flex justify-content-center align-items-center flex-column" style={{ height: "250px" }}>
           <Row className="w-100 d-flex justify-content-center align-items-center" style={{ height: "25px" }}>
                      <Col xs={12} className="text-center">
                        <p style={{ fontSize: "20px", color: "white",fontWeight:"bold" }}>GET LATEST STORIES</p>
                      </Col>
            </Row>
            <br></br>
          
           <Row className="w-100 d-flex justify-content-center align-items-center flex-column" style={{ height: "50px" }}>
                      <Col xs={12} className="text-center">
                        <p style={{ fontSize: "15px", color: "white" }}>
                        Share store details, promotions, or brand content with your customers.
                        </p>
                      </Col>
            </Row>

            <Row className="w-100 d-flex justify-content-center align-items-center">
  <Col xs="auto" className="p-0">
    <Button
      style={{
        backgroundColor: "white",
        height:"45px",
        width: "400px",
        color: "black",
        border: "1px black solid",
        borderRadius: "0px",
        outline: "none",
        boxShadow: "none",
      }}
    >
      Enter Your Email Address
    </Button>
  </Col>
  <Col xs="auto" className="p-0">
    <Button
      style={{
        backgroundColor: "black",
        height:"45px",
        width: "140px",
        color: "white",
        fontWeight: "bold",
        borderRadius: "1px solid black",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      SUBMIT
    </Button>
  </Col>
</Row>

        </Col>
      </Row>
      
      <Row className="d-none d-md-flex justify-content-center text-white">
         
        <Col xs={2} md={2} className="text-center">
          <img src="https://shopblissfulbeauty.com/cdn/shop/files/LOGO_420x.png?v=1732087575" alt="Logo" className="h-[150px] w-auto" />
        </Col>
       
        <Col xs={2} md={2} className="text-left">
          <h6>QUICK LINKS</h6>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
            <li>Shop All</li>
            <li><Link to="/ABOUTUS" className="text-decoration-none text-white">About Us</Link></li>
            <li><Link to="/CONTACTUS" className="text-decoration-none text-white">Contact Us</Link></li>
          </ul>
        </Col>
        <Col xs={2} md={2} className="text-left">
          <h5>USER INFO</h5>
          <ul className="list-unstyled">
            <li><Link to="/PrivacyPolicy" className="text-decoration-none text-white">Privacy Policy</Link></li>
            <li><Link to="/TermsOfService" className="text-decoration-none text-white">Terms of Service</Link></li>
            <li><Link to="/RefundPolicy" className="text-decoration-none text-white">Refund Policy</Link></li>
            <li><Link to="/ShippingPolicy" className="text-decoration-none text-white">Shipping Policy</Link></li>
          </ul>
        </Col>
        <Col xs={1} md={1} ></Col>
        <Col xs={2} md={2} className="text-left">
          <h4>CONTACT INFO</h4>
          <p>Lahore, Pakistan</p>
          <p>+92 333 1234567</p>
          <p>blissfulbeautypakistan@gmail.com</p>
        </Col>
        <Col xs={1} md={1} ></Col>
      </Row>
     
       <br />
      
            <div className="d-none d-md-flex flex-row items-center justify-center gap-3">
      
           
      
              
               <a href ="https://api.whatsapp.com/send/?phone=%2B923331371383&text&type=phone_number&app_absent=0"><FaWhatsapp className="text-xl cursor-pointer text-white" /></a>
                <a href ="https://www.facebook.com/blissfulbeautypakistan?mibextid=ZbWKwL"><FaFacebookF className="text-xl cursor-pointer text-white" /></a>
                <a href ="https://www.instagram.com/blissfulbeautypakistan/"><FaInstagram className="text-xl cursor-pointer text-white" /></a>
      
                     
      
                      
      
            </div>
      
           
      
            <div className=" d-none d-md-flex w-100 justify-content-center align-items-center mt-4 " style={{ height: "20px" }}>
              
                   <br></br> <br></br><br></br>
                 
                    <p style={{ fontSize: "15px", color: "white" }}>
                    “Designed & Developed by Potato Logics”
                    </p>
               
                </div>
    </Container>
  );
};

export default Footer;