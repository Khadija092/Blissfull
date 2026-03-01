import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsInfo() {
  return (
    <Container style={{ marginTop: "30px" }}> {/* ✅ Added 20px Margin */}
      <Row>
      <Col className="d-none d-sm-block" xs={1} md={1}></Col> 
        <Col xs={12} md={10} className="text-start text-responsive"> {/* Left Align */}
          <p className="heading-responsive" style={{ fontWeight: "bold" }}>
            Our story: From Passion to Legacy: The Blissful Journey
          </p>

          {/* 2 Line Space */}
          <br />
          <br />

          <p>
            In a small setup, with a big dream, Anya and Ali embarked on a journey to revolutionize the skincare landscape in Pakistan. As a doctor and dermatology enthusiast, Anya's passion for skincare was contagious, and soon, her husband Ali was equally invested in the vision.
          </p>

          {/* 2 Line Space */}
          <br />
          <br />

          <p>
            With unwavering dedication, they worked tirelessly, pouring their hearts and souls into creating a brand that would make high-quality skincare accessible to all. Their relentless pursuit of excellence and commitment to affordability resonated deeply with the Pakistani community.
          </p>

          {/* 2 Line Space */}
          <br />
          <br />

          <p>
            In less than a year, their small startup blossomed into one of Pakistan's leading skincare brands, with an astonishing 160,000 orders and an impressive 75% customer return rate. The love and loyalty of their customers humbled and fueled them to continue innovating and improving.
          </p>

          {/* 2 Line Space */}
          <br />
          <br />

          <p>
            Today, Anya and Ali's brainchild stands as a testament to the power of passion, hard work, and the relentless pursuit of excellence. Their story serves as a beacon of inspiration, reminding us that even the smallest beginnings can lead to extraordinary outcomes.
          </p>

          {/* 2 Line Space */}
          <br />
          <br />

          <p className="heading-responsive" style={{ fontWeight: "bold" }}>Join the Blissful Family</p>

          {/* 2 Line Space */}
          <br />
          <br />

          <p>
            As we continue to grow and evolve, we remain committed to our core values: quality, affordability, and a passion for empowering healthy, glowing skin. We're honored to have you as part of our journey and look forward to helping you achieve your skincare goals.
          </p>
        </Col>
        <Col className="d-none d-sm-block" xs={1} md={1}></Col> 
      </Row>
      <style>
        {`
          .text-responsive {
            font-size: 1.1rem;
          }
          .heading-responsive {
            font-size: 1.1rem;
          }
          @media (max-width: 576px) {
            .text-responsive {
              font-size: 0.9rem;
            }
            .heading-responsive {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default AboutUsInfo;
