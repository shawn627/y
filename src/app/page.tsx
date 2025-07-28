import TelegramLogin from "./TelegramLogin"
import GoogleLoginButton from "./GoogleLogin"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      {/* <p className="text-lg">Log in with Telegram below:</p> */}

      {/* Telegram Login Widget inside an iframe */}
      <TelegramLogin />
      <p className="text-lg">Log in with Google below:</p>
      <GoogleLoginButton />
    </div>
  )
}
