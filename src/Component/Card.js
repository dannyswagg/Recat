import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import ovo2 from "../Images/ovo2.svg";
import fit from "../Images/fit.svg";

const Styles = styled.div`
  background: #000;
  color: #000;
  padding-top: 10%;
  padding-bottom: 10%;
  text-align: center;
  border-bottom: 1px solid #b90abf;
  box-sizing: border-box  
`;

const Section = () => {
  return (
    <>
      <Styles id="services">
        <Container>
          <h1 className="text-white pb-5">OUR SERVICES </h1>
          <Row>
            <Col lg={4} className="p-5">
              <Card className="p-5">
                <img style={{ width: "100%" }} src={fit} alt="Hello" />
                <h3>No Cost</h3>
                <p>
                  We help you reduce your fees and increase your overall
                  revenue.
                </p>
              </Card>
            </Col>
            <Col lg={4} className="p-5">
              <Card className="p-5">
                <img style={{ width: "100%" }} src={ovo2} alt="Hello" />
                <h3>Flexible</h3>
                <p>
                  We help you reduce your fees and increase your overall
                  revenue.
                </p>
              </Card>
            </Col>
            <Col lg={4} className="p-5">
              <Card className="p-5">
                <img style={{ width: "100%" }} src={fit} alt="Hello" />
                <h3>Secure</h3>
                <p>
                  We help you reduce your fees and increase your overall
                  revenue.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default Section;
