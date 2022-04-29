const sgMail = require("@sendgrid/mail");
const schedule = require('node-schedule');

require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email, subject, body) => {
  sgMail.send({
    to: email,
    from: "company@gmail.com",
    subject: `${subject}`,
    text: `${body}`
  });
};

module.exports = {
  sendEmail
};
