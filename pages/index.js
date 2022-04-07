import React, { useContext } from "react";

import {Context} from "../context";

import router,{useRouter} from "next/router";

import axios from "axios";

export default function Auth() {

    const { username, secret, setUsername, setSecret } = useContext(Context);

    const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();

        if (username.length === 0 || secret.length === 0) return;

        axios.put(
            'https://api.chatengine.io/users/',
            {username,secret},
            {headers:{"Private-key" : "8acf8fc9-5520-4b33-a709-07b735256f09"}}
        )
            .then(r => router.push('/chats'))
    };

  return(
      <div className="background">
        <div className="auth-container">
            <form onSubmit={e => onSubmit(e)} className="auth form">
                <div className="auth-title">NextJS chat</div>

                <div className="input-container">
                    <input placeholder="Email" className="text-input" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" className="text-input" onChange={e => setSecret(e.target.value)}/>
                </div>

                <button type="submit" className="submit-button" >Log in /Sign up</button>
            </form>
        </div>
      </div>
  )
}
