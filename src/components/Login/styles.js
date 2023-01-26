import styled from "styled-components";


export const Ptext = styled.p`

    color:#0B2E99;

`
export const DivP = styled.div`

  background-color: white;
  margin-top: 40px;
  border-radius: 1rem;
  color: black;
  width: 210px;
  position: fixed;
  margin: 20px;
  font-family: "Poppins";
  font-size: 14px;
  margin: 0px 0px 130px 45px ;
  
  -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          

          @-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}

@media only screen and (max-width: 600px) {
  margin: 0px 0px 0px 20px ;
}

`

export const H2 = styled.h1`

  display: inline-block;
  

` 

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 100px;
  width: 100%;
  justify-content: center;
  
  
  background-color: #37505c;
  @media only screen and (max-width: 600px) {
    
    margin:0px  0px;
    overflow: hidden;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 0 ;
    margin: 0;
    position: fixed;
    
   
    
    
  }
`;

export const Info = styled.div`

background-color: #647175;
  width: 1200px;
  height: 700px;
  color: white;
  position: fixed;
  border-radius: 1rem;
  margin: 100px;
  display: flex;
  margin: 100px 200px 00px 0px ;

  
 


  @media only screen and (max-width: 600px) {
    

  width: 350px;
  height: 100vh;
  display: inline-block;
  position: fixed;
  color: white;
  margin: 0px;
  
  
    
  }


`
export const InfoBox = styled.div`

background-color:#3f4547 ;
opacity: 0.8;
  width: 300px;
  height: 200px;
  color: white;
  display: block;
  margin: 50px 100px 100px 430px ;
  border-radius: 1rem;
  justify-content: center;
  padding: 10px 0px 0px 0px;
  font-family: "Poppins";
  
  

  @media only screen and (max-width: 600px) {
    

  width: 250px;
  height: 600px;
  display: inline-block;
  color: white;
  margin: 5px 0px 0px 0px ;
  svg {
    width: 50px;
    height: 80px;
    margin-bottom: 50px;
    color: blue;


  }
    
  }


`

export const Button = styled.button`
  display: flex;
  position: fixed;
  font-size: 18px;
  padding: 14px 18px;
  width: 300px;
  height: 70px;
  margin: 440px 30px 0px 430px ;

  border: none;
  border-radius: 10px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  background-color: #2e2e2e;
  -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          

          @-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}

  
  :hover{
    background-color: green;
    font-size: 20px;
    color: whitesmoke;
  }
  :active{
    background-color: #4e4e4e;
  }
  :hover{
    background-color: #4e4e4e;
    
  }
  :active{
    
    background-color: #3e3e3e;
    
    color: whitesmoke;
    
  }
  @media only screen and (max-width: 600px) {
   
  display: flex;
  background-color: #37505c;
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: white;
  width: 200px;
  height: 100px;
  margin: 120px 50px 50px 50px ;
  transition: ease-in-out 0.2s;
  border-radius: 10px;
  -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          

          @-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}



  }
 
 
`;



