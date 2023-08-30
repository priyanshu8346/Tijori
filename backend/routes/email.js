const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/contact",async(req, res)=>{
  const {email, name, message} = req.body;
  if (!email || !name || !message) {
    return res.status(400).json({ error: "Missing required data" });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'priyanshuagrawal419@gmail.com',
        pass: 'Sakshiborn@24'
      }
    });
    const info = await transporter.sendMail({
      from: email, // sender address
      to: "meda.cronin@ethereal.email, priyanshuagrawal419@gmail.com", // list of receivers
      subject: name, // Subject line
      text: message, // plain text body
    });
    console.log("Mail sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending the email" });
  }
})

module.exports = router;
