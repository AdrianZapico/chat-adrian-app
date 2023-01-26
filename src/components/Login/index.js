import React from "react";
import { auth, provider, provider2 } from "../../services/firebase";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";
import { useState } from "react";



const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const [hide,setHide] = useState(false)
  return (
  
    <C.Container>
 
      <C.Info>
       
      <C.InfoBox>
      <C.H2>Friendly Chat 🧙‍♂️</C.H2><br/>
      <MdMessage />
        <p>Olá, esse é um chat para conversas on-line entre amigos através do Login atomatico
        com o email do Google, é muito fácil de usar!
        </p>
        <C.Button style={{
            display: 'flex',
            backgroundColor: '#37505c',
            position: 'relative',
            display: 'inline-block',
            
            color: 'white',
            width: '100px',
            height: '50px',
            margin: '10px 10px 10px 10px ',
        }} onClick={()=>setHide(!hide)}>INFO</C.Button>
        {!hide && 
        
        <C.DivP>

        <strong>Passo 1: </strong> <C.Ptext>Faça Login com o Google clincando no botão abaixo</C.Ptext>
        <strong>Passo 2: </strong> <C.Ptext>Cliqe no ícone que esta piscando em azul ao lado da foto</C.Ptext>
        <strong>Passo 3: </strong> <C.Ptext>Insira um email para quem deseja enviar uma mensagem via chat .</C.Ptext>
        <strong>Passo 4: </strong> <C.Ptext>Aproveite 🧙🏻‍♂️</C.Ptext>
          </C.DivP>
        
        }
    
        </C.InfoBox>

        
      
      
      <C.Button onClick={handleSignin}>🧙🏻‍♂️Faça login com  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>oogle</C.Button>



      
      </C.Info>
  
      

    </C.Container>
  );
};

export default Login;
