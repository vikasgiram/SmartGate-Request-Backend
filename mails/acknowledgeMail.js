const config = require("../utils/config");
const transporter = require("./transporter");

exports.acknowledgeMail = async (name, email) => {
  try {
    const mailOptions = {
      from: config.email,
      to: email,
      subject: "Acknowledgment of your request",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Smart Gate Email</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(to bottom right, #eef3fc, #dbe7ff);
      font-family: 'Segoe UI', sans-serif;
    }
 
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(63, 120, 224, 0.15);
      overflow: hidden;
    }
 
    .header {
      background-color: #3f78e0;
      color: white;
      text-align: center;
      padding: 40px 30px;
      border-bottom-left-radius: 80px 30px;
      border-bottom-right-radius: 80px 30px;
    }
 
    .header img {
      max-height: 60px;
      max-width: 200px;
      margin: 0 auto 10px;
      display: block;
    }
 
    .header h1 {
      margin: 0;
      font-size: 26px;
      letter-spacing: 1px;
    }
 
    .body {
      padding: 30px;
      color: #333;
    }
 
    .body h2 {
      margin-top: 0;
      color: #3f78e0;
      font-size: 22px;
    }
 
    .body p {
      font-size: 16px;
      line-height: 1.6;
    }
 
    .demo-box {
      background-color: #edf4ff;
      padding: 20px;
      border-radius: 12px;
      margin-top: 25px;
      border-left: 4px solid #3f78e0;
    }
 
    .demo-box p {
      margin: 10px 0;
      font-size: 15px;
    }
 
    .demo-box strong {
      color: #2b4ea2;
    }
 
    .footer {
      background-color: #f0f5ff;
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #666;
      border-top: 1px solid #dce6f9;
    }
 
    @media only screen and (max-width: 620px) {
      .body {
        padding: 20px;
      }
 
      .header {
        padding: 30px 20px;
      }
 
      .body h2 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
 
    <!-- Header -->
    <div class="header">
      <img src="https://ibb.co/FbgxfBm5" alt="Smart Gate Logo" />
      <h1>Welcome to Smart Gate</h1>
    </div>
 
    <!-- Body -->
    <div class="body">
      <h2>Hi ${name} 👋,</h2>
      <p>
        We're thrilled to have you try out Smart Gate! Your request has been received and is currently being reviewed by our team.
      </p>
      <p>
        In the meantime, here are your demo access details so you can explore the platform at your convenience:
      </p>
 
      <div class="demo-box">
        <p><strong>🌐 Website:</strong> <a href="https://www.daccess.co.in" target="_blank">www.daccess.co.in</a></p>
        <p><strong>👤 Username:</strong> <code>demo_user</code></p>
        <p><strong>🔐 Password:</strong> <code>Demo@123</code></p>
        <p><strong>🕒 Access Validity:</strong> 3 Days from the first login</p>
      </div>
 
      <p style="margin-top: 40px;">
        If you have any questions or need support, feel free to reach out to us anytime.
      </p>
 
      <p>
        Warm regards,<br />
        <strong>Team Smart Gate</strong>
      </p>
    </div>
 
    <!-- Footer -->
    <div class="footer">
      &copy; 2025 Smart Gate. All rights reserved.<br />
      Making access smart, secure, and simple.
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
  } catch (err) {
    console.log("Error in AcknoledgeMail: ", err);
  }
};
