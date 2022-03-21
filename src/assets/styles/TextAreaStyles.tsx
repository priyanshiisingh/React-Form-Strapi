import styled from "styled-components";

const PrePro = styled.input`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 50px !important;
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;
`;

const AddInfo = styled.textarea`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 150px;
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

export { AddInfo, Div, PrePro };
