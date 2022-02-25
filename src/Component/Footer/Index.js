import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>ABOUT US </FooterLinkTitle>
                <FooterLink>How It Works</FooterLink>
                <FooterLink>Testimonials</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Investors</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>CONTACT US </FooterLinkTitle>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Support</FooterLink>
                <FooterLink>destination</FooterLink>
                <FooterLink>Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>VIDEOS </FooterLinkTitle>
                <FooterLink>Submit Videos</FooterLink>
                <FooterLink>Ambassador</FooterLink>
                <FooterLink>Agency</FooterLink>
                <FooterLink>Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
                <FooterLink>Github</FooterLink>
                <FooterLink>Facebook</FooterLink>
                <FooterLink>Twitter</FooterLink>
                <FooterLink>LinkedIn</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <Link to="navigation" spy={true} smooth={true} duration={700}>
                <SocialLogo>
                  <GiGuitarBassHead style={{ color: "#b90abf" }} />
                  dbass-ED
                </SocialLogo>
              </Link>
              <WebsiteRights>
                Copyright © {new Date().getFullYear()} All Rights Reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  aria-label="Facebook"
                  href="https://web.facebook.com/ugiomohd"
                  target={"_blank"}
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  aria-label="Github"
                  href="https://github.com/dannyswagg"
                  target={"_blank"}
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/ugiomoh-daniel-1937b1160/"
                  target={"_blank"}
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  aria-label="Twitter"
                  href="https://twitter.com/dannyswagg_"
                  target="_blank"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
