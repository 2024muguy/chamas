const nodemailer = require('nodemailer');

exports.sendEmailNotification = (item) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient@example.com',
    subject: 'New Item Added',
    text: `A new ${item.title} has been added with price: ${item.price}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};
