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
    onAuthCallback={async (data: TelegramData) => {
  
      console.log(data);
      const reqObj: Record<string, any> = { ...data };

      const response = await fetch("http://localhost:3000/auth/telegram/request", {
        method: "POST",
        body: JSON.stringify(reqObj),
      });
      const result = await response.json();
      console.log(result);
      window.open(result.link, "_blank");
  
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
  