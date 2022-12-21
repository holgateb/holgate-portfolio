import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bs.png";
import mongo from "../assets/img/mongo.png";
import javascript from "../assets/img/js.png";
import express from "../assets/img/express.png";
import node from "../assets/img/node.png";

function Skills() {
  return (
    <main style={{ padding: "25px" }}>
      <Container>
        <Row style={{ padding: "25px" }}>
          <Col>
            <Card style={{ width: "18rem", height: "28rem" }}>
              <Card.Img variant="top" src={react} />
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                  React is a front-end JavaScript library for building user
                  interfaces based on UI components developed by Meta and a
                  community of individual developers and companies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={bootstrap} />
              <Card.Body>
                <Card.Title>Bootstrap</Card.Title>
                <Card.Text>
                  Bootstrap is a CSS framework directed at responsive,
                  mobile-first front-end web development that contains HTML, CSS
                  and JavaScript-based components.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={mongo} />
              <Card.Body>
                <Card.Title>MongoDB</Card.Title>
                <Card.Text>
                  MongoDB is a source-available cross-platform document-oriented
                  database program, that is classified as a NoSQL database
                  program.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ padding: "25px" }}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={javascript} />
              <Card.Body>
                <Card.Title>JavaScript ES6+</Card.Title>
                <Card.Text>
                  JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6)
                  is the newer version of JavaScript that was introduced in
                  2015.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={express} />
              <Card.Body>
                <Card.Title>Express</Card.Title>
                <Card.Text>
                  Express.js, or simply Express, is a back end web application
                  framework for building RESTful APIs with Node.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={node} />
              <Card.Body>
                <Card.Title>NodeJS</Card.Title>
                <Card.Text>
                  Node.js is an open-source, cross-platform JavaScript runtime
                  environment and library for running web applications outside
                  the client's browser.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Skills;
