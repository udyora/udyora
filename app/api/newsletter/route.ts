import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Newsleter Alert <noreply@udyora.com>",
      to: ["udyora@yahoo.com"],
      subject: `Newsletter Subscription - ${email}`,
      html: `
        <div style="background:#122130;padding:40px;font-family:Inter,sans-serif;">
          <div style="max-width:600px;margin:auto;background:#162534;border-top:4px solid #e5c158;padding:40px;color:#fff;">

            <h2 style="margin:0 0 20px;">
              📩 New Newsletter Subscription
            </h2>

            <p style="color:#cfcfcf;line-height:1.7;">
              A new visitor has subscribed through the website footer.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;border-collapse:collapse;">
              <tr>
                <td style="padding:14px 0;font-weight:600;width:180px;">
                  Subscriber Email
                </td>

                <td style="padding:14px 0;">
                  <a
                    href="mailto:${email}"
                    style="color:#e5c158;text-decoration:none;"
                  >
                    ${email}
                  </a>
                </td>
              </tr>
            </table>

            <div style="margin-top:35px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:#999;">
              Sent automatically from the Udyora Ventures website footer.
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
