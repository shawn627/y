import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(req: NextRequest) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
  const { searchParams } = new URL(req.url);

  const params: Record<string, string> = {};
  let hash = '';
  for (const [key, val] of searchParams.entries()) {
    if (key === 'hash') hash = val;
    else params[key] = val;
  }

  const dataCheckString = Object.keys(params)
    .sort()
    .map(k => `${k}=${params[k]}`)
    .join('\n');

  const secret = crypto.createHash('sha256').update(BOT_TOKEN).digest();
  const hmac = crypto.createHmac('sha256', secret).update(dataCheckString).digest('hex');

  if (hmac !== hash) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  return NextResponse.redirect('https://y-tan-five.vercel.app/dashboard');
}
