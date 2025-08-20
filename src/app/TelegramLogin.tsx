"use client"
import { LoginButton } from "@telegram-auth/react";

export type TelegramData = {
  auth_date: number;
  first_name?: string;
  last_name?: string;
  hash: string;
  id: number;
  photo_url?: string;
  username?: string;
}


export default function TelegramLogin() {
  return (
    <LoginButton
    botUsername="test_for_fun_1_bot"
    onAuthCallback={async (data: any) => {
    
      //FE will help me enter the link to the bot using https://t.me/<bot_username>?start=<sessionId>
      const link = `https://t.me/test_for_fun_1_bot?start=${data.id}`;
      console.log(link);
      window.open(link, "_blank");
  
    // const response = await fetch("http://localhost:3000/auth/telegram/register", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //   });
      // const result = await response.json();
      // console.log(result);
    }}
    cornerRadius={5}
    showAvatar={true}
    lang="en"
    />
  )
}
  