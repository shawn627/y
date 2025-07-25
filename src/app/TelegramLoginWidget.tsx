"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    onTelegramAuth: (user: any) => void;
  }
}

export default function TelegramLoginWidget() {
  useEffect(() => {
    // Define the callback function
    window.onTelegramAuth = function (user) {
      console.log("Telegram user:", user);
      // You can now send `user` to your backend for verification and login
    };

    // Inject the script
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "whitelabel_bobolive_bot"); // Your bot username
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "false");
    // script.setAttribute("data-request-access", "write");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");

    document.getElementById("telegram-login")?.appendChild(script);
  }, []);

  return <div id="telegram-login" />;
}
