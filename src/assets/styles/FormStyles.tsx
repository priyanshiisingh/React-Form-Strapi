import styled from "styled-components";

const DivBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  padding: 0 30px;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  max-width: 760px;
`;

const Heading = styled.h4`
  font: normal 700 16px/1.4 Lato;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #515357;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const PPText = styled.p`
  text-align: flex-start;
  font-size: 16px;
  line-height: 1.4;
  margin: 17.5px 0;
  color: #515357;
  margin-top: 50px;
`;

const InputBtn = styled.input`
  background: #4f65f1;
  border: none;
  outline: white;
  color: white;
  padding: 10px 15px;
  font: normal 500 14px/1.4 Lato;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 100px;
`;

const HR = styled.hr`
  border: 1px solid #515357;
  margin-top: 70px;
`;

export { Form, DivBody, Heading, InputBtn, InputDiv, PPText, HR };
