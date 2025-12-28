"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const { data, error } = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });
    if (error) {
      console.error("Resend API Error:", error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error; 
  }
}