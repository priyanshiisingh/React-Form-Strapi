import React from "react";
import {
  OuterDiv,
  InnerDiv,
  Heading,
  SubHeading,
} from "../../assets/styles/HeaderStyles";

const Header = () => {
  return (
    <OuterDiv className="hmain">
      <InnerDiv>
        <Heading>Full-Stack Engineer</Heading>
        <SubHeading className="subText">
          REMOTE OR SF BAY AREA/PRODUCT – ENGINEERING /FULL-TIME
        </SubHeading>
      </InnerDiv>
    </OuterDiv>
  );
};

export default Header;
