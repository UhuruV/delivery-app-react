import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "./assets/home-page.png";

const HomePage = () => {
  return (
    <>
      <Row className="mt-5" style={{ backgroundColor: "#E5E5E5" }}>
        <Col xs={6} id="homepage-second-div" >
          <h1 style={{ color:"#0a142f",fontWeight:"bold" }}> Delivery At Your Door <br/>Step!</h1>
          <h5 style={{ color:"#0a142f" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,
          </h5>
        </Col>
        <Col xs={6} >
          {" "}
          <Image src={image} rounded style={{ width: "100%" }} />
        </Col>
      </Row>

      {/* <Container fluid className="home-page-banner"> */}

      {/* <Row>
          <Col className="banner-col">
            <div className="destination-input"></div>
          </Col>
        </Row> */}
      {/* </Container> */}

      <Container>
        <Row className="m-5">
          <Col xs={6} md={4}>
            <div className="element1-home">
              <h3>Fast Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam.
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="element2-home">
              <h3>Reliable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam.
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="element3-home">
              <h3>Affordable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
