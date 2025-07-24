'use client'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', 'whitelabel_bobolive_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', 'https://staging-winner33.vercel.app/api/telegram-auth'); // ✅ Must be full URL
    script.setAttribute('data-request-access', 'write');
    script.async = true;

    const container = document.getElementById('telegram-button-container');
    if (container) {
      container.innerHTML = ''; // clear existing script
      container.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h1>Login with Telegram</h1>
      <div id="telegram-button-container"></div>
    </div>
  );
}

