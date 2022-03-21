import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;
`;

const IDiv = styled.div`
  width: 60%;
  height: fit-content;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Label = styled.label`
  text-align: flex-start;
  font-size: 16px;
  line-height: 1.4;
  margin: 17.5px 0;
  color: #515357;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  align-items: baseline;
  margin-bottom: 15px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ReqSpan = styled.span`
  display: inline-block;
  color: #ff794f;
  margin-left: 4px;
  font-size: 9px;
  padding-bottom: 0px;
  position: absolute;
`;

export { Input, Label, Div, ReqSpan, IDiv };
