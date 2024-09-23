import nodemailer from 'nodemailer';
// import { render } from '@react-email/render';
// import ContactEmailTemplate from '@/components/ContactEmailTemplate';

export async function POST(req) {
  console.log('req', req)
  try {
    const { to, subject, message } = await req.json(); // Parsing JSON body

    // Create a transporter using SMTP
    // const emailHtml = render(
    //   <ContactEmailTemplate
    //     email={to}
    //     subject={subject}
    //     message={message}
    //   />
    // );
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
      to: process.env.EMAIL_USER,                       // List of receivers
      subject: 'Message from website',             // Subject line
      html: `
      <p>from: ${to},</p>
      <p>subject: ${subject},</p>
      <p>message: ${message},</p>
    `,
    });

    let client = await transporter.sendMail({
      from: `"Ajithkumar" <${process.env.EMAIL_USER}>`, // Sender address
      to: to,                       // List of receivers
      subject: 'Thank You for Reaching Out!', // Subject line
      html: `
        <p>Dear ${to},</p>
        <p>Thank you for getting in touch through my website, <a href="https://ajithkumar.pro">ajithkumar.pro</a>. I appreciate your interest and the time you've taken to contact me.</p>
        <p>I'll review your message and get back to you as soon as possible. In the meantime, if there's anything urgent or if you'd like to provide further details, feel free to reply to this email.</p>
        <p>Looking forward to connecting!</p>
        <br/>
        <p>Best regards,<br/>Ajithkumar<br/>Frontend Developer<br/><a href="https://ajithkumar.pro">ajithkumar.pro</a></p>
      `,
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
