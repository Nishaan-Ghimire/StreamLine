import nodemailer from 'nodemailer';

// Create a transporter using SMTP or other transport methods
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

// Function to send an email
async function sendEmail(to, subject, html) {
  try {
    // Define the email options
    const mailOptions = {
      from: 'StreamLine Mail Service',
      to,
      subject,
     html,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
}



export {sendEmail}

