"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    onTelegramAuth: (user: any) => void;
  }
}

export default function TelegramLoginWidget() {
useEffect(() => {
    // Define the Telegram auth callback function on the global window
    (window as any).onTelegramAuth = function (user: any) {
      console.log('Telegram Auth Success:', user);

      const data = fetch('/api/telegram-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      
      console.log('Telegram Auth Response:', data);
    };

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'whitelabel_bobolive_bot'); // your bot username
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    const container = document.getElementById('telegram-button-container');
    if (container) {
      container.innerHTML = ''; // clear if re-rendered
      container.appendChild(script);
    }
  }, []);



  return <div id="telegram-login" />;
}
