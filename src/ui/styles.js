import styled from "styled-components";

export const StyledButtonCancel = styled.button`
  background-color: transparent;
  border: 0px solid transparent;
  outline: solid 2px #797979;
  outline-offset: -2px;
  color: #797979;
  border-radius: 5px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: bold;
  box-sizing: content-box;
`;

export const StyledButtonCreated = styled.button`
  background-color: #FFD500;
  border: 0px solid transparent;
  color: white;
  border-radius: 5px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: bold;
`;

export const StyledButtonCreatedDisabled = styled(StyledButtonCreated)`
  background-color: #FFFAE3;
  color: #FFD500;
  cursor: not-allowed;
`;

export const StyledActionHeader = styled.div`
  margin: 30px 0 15px 0;
  
  & span{
    margin-left: 15px;
    color: #A6A6A6;
    font-size: 10px;
    font-weight: bold;
  }
`;