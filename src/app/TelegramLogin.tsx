"use client"
import { LoginButton } from "@telegram-auth/react";
import { useEffect } from "react";

export default function TelegramLogin() {
  return (
    <LoginButton
    botUsername="whitelabel_bobolive_bot"
    authCallbackUrl="https://y-tan-five.vercel.app"
    buttonSize="large"
    cornerRadius={5}
    showAvatar={true}
    lang="en"
    />
  )
    // useEffect(() => {
    //     const handleTelegramLogin = (event: MessageEvent) => {
    //       if (event.origin !== "https://oauth.telegram.org") return;
    //       console.log("Telegram data received:", event.data);
    //     };
    //     window.addEventListener("message", handleTelegramLogin);
    //     return () => window.removeEventListener("message", handleTelegramLogin);
    //   }, []);

      
    // const TelegramBotName = "whitelabel_bobolive_bot"
    // const TelegramBotOrigin = "https://y-tan-five.vercel.app"
    // return (
    //   <div>
    //     <h1>Login via Telegram</h1>
    //     <iframe
    //       src={`https://oauth.telegram.org/embed/${TelegramBotName}?origin=${TelegramBotOrigin}&embed=1&request_access=write&size=large`}
    //       width="300"
    //       height="50"
    //       frameBorder="0"
    //       sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    //     ></iframe>
    //   </div>
    // )
  }
  