export default function TelegramLogin() {
    const TelegramBotName = "whitelabelbobolivebot"
    const TelegramBotOrigin = "https://y-tan-five.vercel.app"
    return (
      <div>
        <h1>Login via Telegram</h1>
        <iframe
          src={`https://oauth.telegram.org/embed/${TelegramBotName}?origin=${TelegramBotOrigin}`}
          width="300"
          height="50"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
      </div>
    )
  }
  