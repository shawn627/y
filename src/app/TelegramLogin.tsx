export default function TelegramLogin() {
    const TelegramBotName = "whitelabel_bobolive_bot"
    const TelegramBotOrigin = "https://y-tan-five.vercel.app"
    return (
      <div>
        <h1>Login via Telegram</h1>
        <iframe
          src={`https://oauth.telegram.org/embed/${TelegramBotName}?origin=${TelegramBotOrigin}&embed=1&request_access=write&size=large`}
          width="300"
          height="50"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        ></iframe>
      </div>
    )
  }
  