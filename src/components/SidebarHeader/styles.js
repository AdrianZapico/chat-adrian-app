import styled from "styled-components";


export const Container = styled.div`
  height: 59px;
  
  background-color: #aebfc5;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
  border:solid 1px;
  border-radius:5px;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: blue;
    cursor: pointer;
        
    @keyframes animate{
     0%{
       opacity: 0;
     }
     50%{
       opacity: 0.7;
     }
     100%{
       opacity: 1;
     }
   }
   animation: animate 1s linear infinite;
    
  }
`;
