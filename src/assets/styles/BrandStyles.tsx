import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0 30px;
  position: fixed;
  z-index: 3000;
  @media (max-width: 800px) {
    justify-content: start;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  min-width: 760px;
`;

const Link = styled.a`
  display: inline-block;
  margin: 17.5px 0;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
`;

const Image = styled.img`
  height: 77px;
`;

export { Div, Nav, Link, Image };
