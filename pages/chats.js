import React, {useState, useEffect, useContext} from "react";

import {Context} from "../context";

import {useRouter} from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
import('react-chat-engine').then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessgaeFormSocial)
);


export default function Chats() {

  const {username,secret} = useContext(Context);
  const [showChat,setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
   if (typeof document !== null){
     setShowChat(true)
   }

   if (!showChat) return <div> </div>
  },[]);

  return(
      <div className="background">
        <div className="shadow">
          <ChatEngine
              height='calc(100vh-200px)'
              projectID='8d3174b0-9789-4a4d-a9ae-00b491c16e0f'
              userName={username}
              userSecret={secret}/>
        </div>
      </div>
  )
}
