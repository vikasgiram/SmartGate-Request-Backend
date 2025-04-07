const config = require("../utils/config");
const transporter = require("./transporter");

const newRequstMail = async (data) => {
  try {
    console.log(data);
    const mailOptions = {
      from: config.email,
      to: "vikas@daccess.co",
      subject: "New Demo Request for Smart Gate",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Submission</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #e6f0fa;
      font-family: 'Segoe UI', sans-serif;
    }
    .email-container {
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0, 85, 153, 0.1);
    }
    h2 {
      text-align: center;
      color: #004a99;
      margin-bottom: 25px;
      font-size: 24px;
    }
    .form-row {
      margin-bottom: 20px;
    }
    .label {
      font-size: 14px;
      font-weight: 600;
      color: #0055cc;
      margin-bottom: 5px;
    }
    .value {
      background-color: #f0f6ff;
      padding: 12px 15px;
      border-radius: 6px;
      font-size: 15px;
      color: #222;
      border-left: 4px solid #3399ff;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #777;
      margin-top: 30px;
    }
 
    /* Responsive */
    @media only screen and (max-width: 600px) {
      .email-container {
        padding: 20px;
      }
      h2 {
        font-size: 20px;
      }
      .label {
        font-size: 13px;
      }
      .value {
        font-size: 14px;
        padding: 10px 12px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h2>📝 New Form Submission</h2>
 
    <div class="form-row">
      <div class="label">First Name</div>
      <div class="value">${data?.firstName}</div>
    </div>
 
    <div class="form-row">
      <div class="label">Last Name</div>
      <div class="value">${data?.lastName}</div>
    </div>
 
    <div class="form-row">
      <div class="label">Organization</div>
      <div class="value">${data?.organization}</div>
    </div>
 
    <div class="form-row">
      <div class="label">Email</div>
      <div class="value">${data?.email}</div>
    </div>
 
    <div class="form-row">
      <div class="label">Phone Number</div>
      <div class="value">${data?.phone}</div>
    </div>
 
    <div class="form-row">
      <div class="label">Message</div>
      <div class="value">${data?.message}</div>
    </div>
 
    <div class="form-row">
      <div class="label">Checkbox Consent</div>
      <div class="value">${data?.offerings}</div>
    </div>
 
    <div class="footer">
      This email was automatically generated from your website.
    </div>
  </div>
</body>
</html>
 
 `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return false;
      } else {
        return true;
      }
    });
  } catch (error) {
    console.error("Error sending new request email: ", error);
  }
};
exports.newRequstMail = newRequstMail;
