"use client"
import { LoginButton } from "@telegram-auth/react";

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
}
  