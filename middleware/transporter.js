import nodemailer from "nodemailer";
 
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
 
});
 
export default transporter;
 