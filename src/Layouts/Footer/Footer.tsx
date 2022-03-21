import React from "react";
// import "./footer.css";
import {
  Div,
  Link,
  Para,
  FooterS,
  Image,
} from "../../assets/styles/FooterStyles";

interface FooterProps {
  homeLink: string;
  leverimg: any;
}

const Footer = ({ homeLink, leverimg }: FooterProps) => {
  return (
    <FooterS className="footer">
      <h5>
        <Link href={homeLink} className="homelink">
          Render Home Page
        </Link>
      </h5>
      <Para>
        Jobs powered by
        <Image src={leverimg} alt="leverlogo" className="lLogo" />
      </Para>
    </FooterS>
  );
};

export default Footer;
