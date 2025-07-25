"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    onTelegramAuth: (user: any) => void;
  }
}

export default function TelegramLoginWidget() {
useEffect(() => {
    window.onTelegramAuth = async (user: any) => {
        console.log('Received from Telegram:', user)
  
        // Send to your Next.js API route
        const res = await fetch('/api/telegram-auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        })
  
        const data = await res.json()
        if (data.success) {
          window.location.href = '/home' // or redirect based on response
        } else {
          alert('Invalid Telegram login')
        }
      }
  
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-widget.js?22'
      script.async = true
      script.setAttribute('data-telegram-login', 'whitelabel_bobolive_bot')
      script.setAttribute('data-size', 'large')
      script.setAttribute('data-request-access', 'write')
      script.setAttribute('data-onauth', 'onTelegramAuth')
  
      const container = document.getElementById('telegram-button')
      if (container) {
        container.innerHTML = ''
        container.appendChild(script)
      }
    }, [])

  return <div id="telegram-login" />;
}
