import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import pastel from "../Images/pastel.jpg";
import { ButtonC, Putin } from "./Elements";

const Styles = styled.div`
  padding: 70px 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  background-image: url(${pastel});
  background-attachment: fixed;
`;

class Sign extends Component {
  render() {
    return (
      <>
        <Styles id="sign">
          <Container>
            <form>
              <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
                SIGN UP <span style={{ color: "#B90ABF" }}>HERE!</span>
              </h1>
              <Putin className="mb-5">
                <div>
                  <input
                    className="mt-3"
                    type="text"
                    placeholder="Email or Phone"
                    id="username"
                  />
                </div>
                <div>
                  <input
                    className="mt-3"
                    type="text"
                    placeholder="Password"
                    id="password"
                  />
                </div>
              </Putin>
              <ButtonC style={{ color: "#000" }}>Sign Up</ButtonC>
              <ButtonC className="mt-3" style={{ color: "#000" }}>
                Sign In
              </ButtonC>
              <p>
                <strong>
                  <i>
                    Already have an account? <br />
                    sign in here.
                  </i>
                </strong>
              </p>
            </form>
          </Container>
        </Styles>
      </>
    );
  }
}

export default Sign;
