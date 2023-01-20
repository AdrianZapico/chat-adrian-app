import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left:700px ;
`;



export const Button = styled.button`
  outline: none;
  font-size: 18px;
  padding: 14px 18px;
  border: none;
  border-radius: 10px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  background-color: #2e2e2e;
  :hover{
    background-color: #3e3e3e;
    font-size: 20px;
    color: whitesmoke;
  }
  :active{
    background-color: #4e4e4e;
  }
  
 
`;


export const Ptext = styled.p`

 
   width: 300px;
  :hover{
    transition: all ease-in-out 1s;
    
  }

  
   
   

`
