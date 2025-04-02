const transporter = require("./transporter");

exports.acknowledgeMail = async (name, email) => {
  try {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Acknowledgment of your request",
        text: `Hello ${name},\n\nThank you for your request. We have received it and will get back to you shortly.\n\nBest regards,\nSmart Gate Team`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return false;
      } else {
        return true;
      }
    });
  } catch (err) {
    console.log("Error in AcknoledgeMail: ", err);
  }
};
