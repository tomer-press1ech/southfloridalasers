import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    // TODO: Integrate email service (e.g., Resend, SendGrid, AWS SES)
    // Example:
    // await sendEmail({
    //   to: "info@southfloridalasers.com",
    //   subject: `Contact Form: ${subject}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    // });

    console.log("Contact form submission:", { name, email, phone, subject, message });

    return NextResponse.json(
      { success: true, message: "Your message has been received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
