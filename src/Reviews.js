import React from "react";
import Slider from "react-slick";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ 
        ...style, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: "40px", 
        height: "40px", 
        position: "absolute",  
        top: "50%",  
        left: "1416px",  /* Keep visible on all screens */
        transform: "translateY(-50%)",
       
        backgroundColor: "white",  
       
        borderRadius: "50%",  
        cursor:"pointer",
        zIndex: 10,  
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }} 
      onClick={onClick}
    >
      <span style={{ fontSize: "30px", color: "#f9a8d4" }}>›</span>  {/* Corrected Symbol */}
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
    className={className} 
    style={{ 
      ...style, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      width: "40px", 
      height: "40px", 
      opacity:1,
      position: "absolute",  
        top: "50%",  
        right: "1416px",  /* Keep visible on all screens */
        transform: "translateY(-50%)",
      backgroundColor: "white",  
      borderRadius: "50%",  
     
      zIndex: 10,  
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      cursor: "pointer"
    }} 
    onClick={onClick}
  >
    <span style={{ fontSize: "30px", color: "#f9a8d4" }}>‹</span> 
    
  </div>

  );
};

const testimonials = [
  {
    name: "Aisha Khan",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/sunscreen_300x300.png?v=1738908689",
    rating: 5,
    review: "I love how light and hydrating the moisturizer is. It doesn’t clog my pores, and my skin feels good all day."
  },
  {
    name: "Neha Rana",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/image-1_300x300.png?v=1732092732",
    rating: 5,
    review: "The face wash is the best product I’ve ever used. It cleanses deeply without drying out my skin. My family is hooked too!"
  },
  {
    name: "Maryam Salman",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/hyloronic_300x300.jpg?v=1738908715",
    rating: 5,
    review: "The natural ingredients are what drew me to this brand, and I’m so glad I tried it. My acne scars have faded significantly, Alhamdulillah."
  },
  {
    name: "Zainab Tariq",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/retinol_300x300.png?v=1738908667",
    rating: 5,
    review: "I have received so many compliments on my glowing skin since I started using these amazing products. Highly recommended!"
  },
  {
    name: "Aisha Khan",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/sunscreen_300x300.png?v=1738908689",
    rating: 5,
    review: "I love how light and hydrating the moisturizer is. It doesn’t clog my pores, and my skin feels good all day."
  },
  {
    name: "Neha Rana",
    image: "https://shopblissfulbeauty.com/cdn/shop/files/image-1_300x300.png?v=1732092732",
    rating: 5,
    review: "The face wash is the best product I’ve ever used. It cleanses deeply without drying out my skin. My family is hooked too!"
  },
];

function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,  
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 } 
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 } 
      }
    ]
  };

  return (
    <Container fluid className="py-8 bg-white">
      <Row className="align-items-center">
        <Col xs={1}></Col>
        <Col xs={10} style={{ color: "#f9a8d4", fontWeight: "bold", fontSize: "2.5rem", textAlign: "center" }}>
          BLISSFUL JOURNEY
        </Col>
        <Col xs={1}></Col>
      </Row>

      <br /><br></br>

      <Slider {...settings} className="mx-4">
        {testimonials.map((item, index) => (
          <div key={index} className="px-2">
            <div 
              className="bg-pink-300 text-center p-5 rounded-xl "
              style={{ maxHeight: "470px" }} 
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover mx-auto mb-4"
              />
              <h5 className="font-bold text-white text-[27px]">{item.name}</h5>
              <p className="text-white text-xl">{"★".repeat(item.rating)}</p>
              <p className="text-md text-white">{item.review}</p>
              <Button 
                variant="light" 
                className="mt-4 rounded-full px-5 py-2"
                style={{ backgroundColor: "white", color: "#f9a8d4", fontWeight: "bold" }}
              >
                RECOMMENDED
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default TestimonialSlider;
