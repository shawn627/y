import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <h1>Telegram Login</h1>

      {/* Telegram Login Widget */}
      <Script src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="whitelabelbobolivebot"  // your bot username
        data-size="large"
        data-userpic="true"
        data-request-access="write"
        data-auth-url="localhost:3000/auth/telegram"
        async
      />
    </div>
  )
}
