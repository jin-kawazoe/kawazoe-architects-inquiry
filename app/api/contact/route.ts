import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
    }

    // Supabase への保存（環境変数が設定されている場合のみ）
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const res = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ type, name, email, phone, message }),
      });
      if (!res.ok) {
        console.error("Supabase error:", await res.text());
        return NextResponse.json({ error: "保存に失敗しました。" }, { status: 500 });
      }
    } else {
      // 開発時はコンソールに出力
      console.log("Contact form submission:", { type, name, email, phone, message });
    }

    // Resend でメール通知（環境変数が設定されている場合のみ）
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "noreply@kawazoe-architects.com",
          to: ["info@kawazoe-architects.com"],
          subject: `【新規問い合わせ】${type || "未選択"} - ${name}様`,
          text: `
新規お問い合わせがありました。

■ 用途: ${type || "未選択"}
■ お名前: ${name}
■ メール: ${email}
■ 電話: ${phone || "未記入"}
■ 内容:
${message || "未記入"}
          `.trim(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "サーバーエラーが発生しました。" }, { status: 500 });
  }
}
