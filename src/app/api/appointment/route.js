import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  family: 4, // important for India networks
});

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ===============================
       1️⃣ EMAIL TO CLIENT / ADMIN
    =============================== */
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // client/admin email
      subject: `📩 New Contact Enquiry – ${subject || "No Subject"}`,
      html: `
        <div style="font-family:Arial,sans-serif; padding:20px;">
          <h2>New Contact Form Submission</h2>
          <table cellpadding="6">
            <tr><td><b>Name:</b></td><td>${name}</td></tr>
            <tr><td><b>Email:</b></td><td>${email}</td></tr>
            <tr><td><b>Phone:</b></td><td>${phone || "N/A"}</td></tr>
            <tr><td><b>Subject:</b></td><td>${subject || "N/A"}</td></tr>
          </table>
          <p><b>Message:</b></p>
          <p style="background:#f4f4f4;padding:12px;border-radius:6px;">
            ${message}
          </p>
        </div>
      `,
    });

    /* ===============================
       2️⃣ EMAIL TO USER (AUTO REPLY)
    =============================== */
    await transporter.sendMail({
      from: `"Juvenis Clinic" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "✅ We received your message",
      html: `
        <div style="font-family:Arial,sans-serif; padding:20px;">
          <h2>Hello ${name},</h2>
          <p>
            Thank you for contacting <b>Juvenis Clinic</b>.
            We’ve received your message and our team will
            get back to you shortly.
          </p>

          <p><b>Your Message:</b></p>
          <p style="background:#f6f6f6;padding:12px;border-radius:6px;">
            ${message}
          </p>

          <p style="margin-top:20px;">
            Warm regards,<br/>
            <b>Juvenis Clinic</b>
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("MAIL ERROR 👉", error);
    return Response.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
