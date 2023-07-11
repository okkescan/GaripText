const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/anasayfa.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: req.body.gemail,
      pass: req.body.gpass,
    },
  });
  const mailOption = {
    from: req.body.gemail,
    to: req.body.aemail,
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Mail gönderildi: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server şu portta çalışıyor ${PORT}`);
});
