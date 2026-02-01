import { NextResponse } from "next/server";

/**
 * 데모용 API:
 * - 문의 내용을 서버 로그로만 남깁니다.
 * - 실제 운영 시: Resend/SendGrid/Slack Webhook/Notion/CRM 등에 연동하세요.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // eslint-disable-next-line no-console
    console.log("[CONTACT]", data);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
