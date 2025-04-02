const config = require("../utils/config");
const transporter = require("./transporter");

const newRequstMail = async (data) => {
    try {
        const mailOptions = {
            from: config.email,
            to: 'designer@daccess.co',
            subject: "New Demo Request for Smart Gate",
            text: `New Request from ${data.name}.\n\nDetails:\nEmail: ${data.email}\nPhone: ${data.phone} \nOrginazation: ${data.organization}\nMessage: ${data.message}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              return false;
            } else {
              return true;
            }
          });
    }
    catch (error) {
        console.error("Error sending new request email: ", error);
    }
}
exports.newRequstMail = newRequstMail;