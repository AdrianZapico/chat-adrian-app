import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { MdSend, MdEmojiEmotions } from "react-icons/md";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");


  

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    if(message != ""){
      setMessage("")
    }  
    else{
      alert("O campo não pode ficar vazio 🧙🏻‍♂️")
    }
    
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdEmojiEmotions />
        <MdSend onClick={handleSendMessage} />
      </C.Form>
    </C.Container>
  );
};

export default ChatFooter;
