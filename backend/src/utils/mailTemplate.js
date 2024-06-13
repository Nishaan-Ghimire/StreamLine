function generateEmailTemplate(title, message, username,token,otp) {
    const htmlContent = `
<html>     
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Template</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    color: #333;
  }

  p {
    color: #666;
  }


  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 3px;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>${title}</h1>
    <p>Hello ${username},</p>
    <p>${message}</p>
    <p>OTP: ${otp}</p>
    <a href="${process.env.URL}/verify/${token}">Verify by clicking this link ${process.env.URL}/verify/${token}</a>

   

    <p>Thank you!</p>
  </div>
</body>


      </html>
    `;

    return htmlContent;
}
 export {generateEmailTemplate};