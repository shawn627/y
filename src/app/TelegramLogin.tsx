"use client"
import { LoginButton } from "@telegram-auth/react";

export default function TelegramLogin() {
  return (
    <LoginButton
    botUsername="whitelabel_bobolive_bot"
    onAuthCallback={(data) => {
      console.log(data);
      throw new Error("Not implemented");
    }}
    cornerRadius={5}
    showAvatar={true}
    lang="en"
    />
  )
}
  