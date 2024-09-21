import nodemailer from 'nodemailer';

export async function POST(req) {
  console.log('req', req)
  try {
    const { to, subject, message } = await req.json(); // Parsing JSON body

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL (true for port 465, false for other ports)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: to,                       // List of receivers
      subject: subject,             // Subject line
      text: message,                // Plain text body
    });

    console.log("Message sent: %s", info.messageId);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
