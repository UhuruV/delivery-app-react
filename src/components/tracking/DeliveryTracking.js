import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from 'axios'


const DeliveryTracking = () => {
 const [ data, setdata] = useState();
 const [orderNumber, setOrderNumber] = useState('');

 useEffect(()=>{
   const trackDelivery = async ()=>{
     const response = await axios.get(
       `https://api.sendyit.com/v2/orders/${orderNumber}`
     );
     setOrderNumber(response.data);
   }

   trackDelivery();
 },[orderNumber]);

  return (
    <div className="sign-up">
      <div className="delivery">
        <Card body>
          <h3 className="mb-5" style={{ color: "#ffa724" }}> Track Your Order! </h3>

          <Row className="mb-5" style={{ margin: "0.02%" }}>
            <div style={{ backgroundColor: "#E5E5E5",borderRadius: "5px 5px 0 0 " }}>
              <Row>
                <Col> Amboseli Gardens</Col>
              </Row>
              <Row>
                <Col>Riara Suites</Col>
              </Row>
            </div>
            <div style={{ backgroundColor: "#0a142f", color: "#fff", borderRadius: " 0 0 5px 5px " }}>
              <Row>
                <Col>In Transit</Col>
                <Col>September 24th - 3:30pm</Col>
              </Row>
            </div>
          </Row>

          <Row className="mb-5" style={{ margin: "0.1%" }}>
          <div style={{ backgroundColor: "#E5E5E5",borderRadius: "5px 5px 0 0 " }}>
              <Row>
                <Col> Amboseli Gardens</Col>
              </Row>
              <Row>
                <Col>Riara Suites</Col>
              </Row>
            </div>
            <div style={{ backgroundColor: "#0a142f", color: "#fff", borderRadius: " 0 0 5px 5px " }}>
              <Row>
                <Col>In Transit</Col>
                <Col>September 24th - 3:30pm</Col>
              </Row>
            </div>
          </Row>

          <Row className="mb-5" style={{ margin: "0.1%" }}>
          <div style={{ backgroundColor: "#E5E5E5",borderRadius: "5px 5px 0 0 " }}>
              <Row>
                <Col> Amboseli Gardens</Col>
              </Row>
              <Row>
                <Col>Riara Suites</Col>
              </Row>
            </div>
            <div style={{ backgroundColor: "#0a142f", color: "#fff", borderRadius: " 0 0 5px 5px " }}>
              <Row>
                <Col>In Transit</Col>
                <Col>September 24th - 3:30pm</Col>
              </Row>
            </div>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryTracking;
