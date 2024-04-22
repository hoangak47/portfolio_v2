import Email from "@/components/form_mail/email";
import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

export async function POST(request) {
  const { email, name, message } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "nguyenhoang41911@gmail.com",
    subject: "New message from your portfolio",
    html: Email({ name, email, message }),
  });

  if (error) {
    console.log(error);
    return NextResponse.error(error);
  }

  return NextResponse.json({
    email,
    name,
    message,
  });
}
