import styled from "styled-components";

const OuterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0 20px 0;
  min-height: 270px;
  background-color: white;

  @media (max-width: 800px) {
    justify-content: start;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 760px;
  @media (max-width: 800px) {
    padding: 0 30px;
  }
`;

const Heading = styled.h2`
  margin: 17.5px 0;
  font-weight: 400;
  font-size: 36px;
  color: #515357;
  text-transform: none;
  letter-spacing: 0px;
`;

const SubHeading = styled.div`
  font-size: 14px;
  color: #808080;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export { OuterDiv, InnerDiv, Heading, SubHeading };
