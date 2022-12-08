import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import profile from "../assets/img/profile.png";

function Banner() {
  return (
    <Container style={{ padding: "50px" }}>
      <Row>
        <Col sm={4}>
          <img src={profile} alt="Logo" width="300" height="300"></img>
        </Col>
        <Col style={{ padding: "50px" }}>
          <p>
            Engaging, customer-centric IT professional, acknowledged for
            consistent impact in positions involving technical troubleshooting
            and problem resolution, internal/external customer support, systems
            and process development, network/server and systems administration,
            and team leadership. Collaborative and inclusive, with a reputation
            as a tireless internal and external customer advocate. Track record
            working cross-departmentally to solve challenging technical problems
            for key business clients with efficient and scalable solutions. An
            excellent communicator capable of translating complex technical
            terminology to relatable language. A skilled personnel manager with
            demonstrated ability to mentor team members to promotion.
            Technically-savvy and committed to ongoing professional development.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
