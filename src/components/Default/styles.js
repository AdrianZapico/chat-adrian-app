import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  svg {
    width: 100px;
    height: 100px;
    color: red;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;

`;

export const Ptext = styled.p`

    color:  red;

`

export const Divtext = styled.div`

  border: solid 1px;
  border-radius: 3px;
  background-color: #e3e3;
  justify-content: center;
  flex-direction: column;
  flex: end;

`