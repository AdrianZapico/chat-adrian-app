import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <C.Divtext>
      <MdMessage />
      
      <C.Title>Chat dos Amigos π§π»ββοΈ</C.Title>
      
      <C.Info>
       
          
      <strong>Passo 1: </strong> <C.Ptext>Clique no Γ­cone azul piscando ao lado da foto .</C.Ptext>
      <strong>Passo 2: </strong> <C.Ptext>Insira um email para quem deseja enviar uma mensagem via chat .</C.Ptext>
      <strong>Passo 3: </strong> <C.Ptext>Aproveite π§π»ββοΈ</C.Ptext>
       
        
        
      </C.Info>
      </C.Divtext>
    </C.Container>
  );
};

export default Default;
