import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pop from "../Images/pop.svg";
import styled from "styled-components";
import { ButtonC } from "./Elements";
import { Link } from "react-scroll";

const Styles = styled.div`
  color: #000;
  padding-top: 10%;
  padding-bottom: 10%;
`;

const Section = () => {
  return (
    <>
      <Styles id="discover">
        <Container>
          <Row>
            <Col lg={6} className="p-3">
              <img style={{ width: "100%" }} src={pop} alt="hello" />
            </Col>
            <Col lg={6} className="p-3">
              <h3 style={{ color: "#B90ABF" }}>
                <strike>SAVE MORE MONEY</strike> <br />
                SAVE ALL YOUR MONEY
              </h3>
              <h1>Full Access</h1>
              <h5 className="pb-4">
                There are no restrictions to our entire users, you get to access
                everything at your own disposal.
              </h5>
              <Link to="sign" spy={true} smooth={true} duration={700}>
                <ButtonC style={{ color: "#000" }}>Get Started</ButtonC>
              </Link>
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default Section;
