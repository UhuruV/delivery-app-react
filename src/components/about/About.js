import React from "react";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import image from "./assets/image.png";

const About = () => {
  return (
    <>
      <Container fluid>
        <Row className="about">
          <Col>
            <div>
              <div className="about-text">
                <h1 className="about-heading">DELIVERY AT YOUR DOOR STEP!</h1>
                <h4>Delivery made easier</h4>
              </div>
            </div>
          </Col>
        </Row>

{/* <div className="col-xs-12 col-sm-6"> */}
        <Row className="m-5" style={{ textAlign:"left" }}>
        <Col xs={6} className="about-paragraph">
          <h3 className="abt-h3 p-3">About US</h3>
            <p className="p-3" id="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint?
            </p>
            <Button variant="warning"  className="read-more">
          Read More
        </Button>
          </Col>
          <Col xs={6}>
            <Image src={image} rounded style={{ width: "100%",height: "100%" }} className="about-image" />
          </Col>
        
        </Row>
      </Container>

      <Container>
          <Row>
            <Col xs={6} style={{ textAlign: "left" }} className="core-values">
              <h4>Our Mission </h4>
              <p>
                eos Ad eos saepe lucilius, noster postulant philosophia ea usu,
                postulant philosophia ea usu, qui dicta sadipscing. Ad eos saepe
                lucilius, noster postulant philosophia ea usu Ad eos saepe
                lucilius, noster postulant philosophia ea usu, postulant
                philosophia ea usu, qui dicta sadipscing. Ad eos saepe{" "}
              </p>
            </Col>
            <Col xs={6} style={{ textAlign: "left" }} className="core-values">
              <h4>Our Vision</h4>
              <p>
                eos Ad eos saepe lucilius, noster postulant philosophia ea usu,
                postulant philosophia ea usu, qui dicta sadipscing. Ad eos saepe
                lucilius, noster postulant philosophia ea usu Ad eos saepe
                lucilius, noster post
              </p>
            </Col>
          </Row>
          
        </Container>
    </>
  );
};

export default About;
