import styled from "styled-components";


export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: #4F5EF3;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: #AEBFC5;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
  box-shadow: 3px 3px #1B336E;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: #3C4447;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
  
`;
