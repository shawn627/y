import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN! // keep secure in env

function isTelegramDataValid(data: any): boolean {
  const { hash, ...rest } = data
  const checkString = Object.keys(rest)
    .sort()
    .map(key => `${key}=${rest[key]}`)
    .join('\n')

  const secret = crypto.createHash('sha256').update(BOT_TOKEN).digest()
  const hmac = crypto.createHmac('sha256', secret).update(checkString).digest('hex')

  return hmac === hash
}

export async function POST(req: NextRequest) {
    console.log('Telegram auth request received', req);
  const body = await req.json()

  if (!isTelegramDataValid(body)) {
    return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 401 })
  }

  // Optional: create/find user in DB
  const user = {
    id: body.id,
    username: body.username,
    name: `${body.first_name} ${body.last_name || ''}`,
    photo: body.photo_url,
  }

  // Optional: Set session/cookie/JWT
  return NextResponse.json({ success: true, user })
}
