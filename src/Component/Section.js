import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ovo from "../Images/ovo.svg";
import styled from "styled-components";
import { ButtonC } from "./Elements";
import { animateScroll as scroll, Link } from "react-scroll";

const Styles = styled.div`
  background: #000;
  color: #fff;
  padding-top: 10%;
  padding-bottom: 10%;
`;

const Section = () => {
  return (
    <>
      <Styles id="about">
        <Container>
          <Row>
            <Col lg={6} className="p-3">
              <h3 style={{ color: "#B90ABF" }}>PREMIUM CONTENT</h3>
              <h1>
                Unlimited <br />
                Videos/Music
              </h1>
              <h5 className="pb-4">
                Get acces to our exclusive content on our platform that allows
                you to interact, watch and download tons of professionally made
                content without getting any charged fees.
              </h5>
              <Link to="sign" spy={true} smooth={true} duration={700}>
                <ButtonC style={{ color: "#fff" }}>Get Started</ButtonC>
              </Link>
            </Col>
            <Col lg={6} className="p-5">
              <img style={{ width: "100%" }} src={ovo} alt="Hello" />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default Section;
