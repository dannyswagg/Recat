import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroContent,
  ButtonC,
} from "./Elements";
import video1 from "../Videos/video1.mp4";
import {Link} from "react-scroll"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video1} type="video/mp4" />
      </HeroBg>
      <HeroContent style={{ marginTop: "-80px" }}>
        <HeroH1>Learn to PLay Bass Online.</HeroH1>
        <HeroP>
          Get creative and follow our well analyzed curriculum to teach yourself
          how to play a bass guitar.
        </HeroP>
        <HeroBtnWrapper>
          <Link to="sign" spy={true} smooth={true} duration={700}>
            <ButtonC style={{ color: "#fff" }}>Get Started</ButtonC>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
