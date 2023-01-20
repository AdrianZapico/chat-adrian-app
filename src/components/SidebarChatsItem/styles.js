import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  background-color: #aebfc5;
  border: 0.5px solid black;
  border-radius:10px;
  
 
 

  &:hover {
    background-color: #A5BCF4;
    backdrop-filter: blur(2px);
    cursor:pointer;
  }

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
   
  }

  &.active {
    background-color: #5477E5;
    backdrop-filter: blur(20px);
    cursor:pointer;

    @keyframes animate{
     0%{
       opacity: 0;
     }
     50%{
       opacity: 0.5;
     }
     100%{
       opacity: 0;
     }
   }
   animation: animate 2s linear infinite;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
