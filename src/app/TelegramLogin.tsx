"use client"
import { LoginButton } from "@telegram-auth/react";

export default function TelegramLogin() {
  return (
    <LoginButton
    botUsername="test_for_fun_1_bot"
    onAuthCallback={async (data) => {
      console.log(data);
    const response = await fetch("http://localhost:3000/auth/telegram/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    }}
    cornerRadius={5}
    showAvatar={true}
    lang="en"
    />
  )
}
  