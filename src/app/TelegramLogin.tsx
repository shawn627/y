"use client"
import { LoginButton } from "@telegram-auth/react";

export default function TelegramLogin() {
  return (
    <LoginButton
    botUsername="test_for_fun_1_bot"
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
  