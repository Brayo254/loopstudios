
import React from "react";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const { firstName, lastName, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: "mail.sweetfairy.co.ke",
      port: 465,
      secure: true,
      auth: {
        user: "test@sweetfairy.co.ke",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: `"Website Contact" <test@sweetfairy.co.ke>`,
      to: "test@sweetfairy.co.ke",
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
        Received: ${new Date().toLocaleString()}
      `,

      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Received: ${new Date().toLocaleString()}</em></p>
      `,
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ success: true, message: "Email sent !" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("email error", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email!",
      }),
      { status: 500 },
    );
  }
}
