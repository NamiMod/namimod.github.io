function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;
    var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (name == "") {
      alert("Please Enter Name");
    }
    else if (email == "" || email.match(!validmail)) {
      alert("Please Enter Valid Email");
    }

    else if (message == "") {
      alert("Please Enter Message");
    }
    else {
      var f_message = "Hi, I'm "+name+" and this is my message: "+message
      window.location.href = "mailto:s.namimodarressi@gmail.com?subject="+subject+"&body="+f_message;
    }
  }
