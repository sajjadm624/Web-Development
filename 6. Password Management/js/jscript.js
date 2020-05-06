function check(){
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var errorMessage = document.getElementById("error");
  var errorTOThrow = "";
  try{
    if (password.length < 6){
      errorTOThrow = "<br> Password too short.";
    }
    if (/[A-Z]/g.test(password) == false){
      errorTOThrow += "<br> Password Should Include At Least One Capital Letter.";
    }
    if(/\d/g.test(password) == false){
      errorTOThrow += "<br> Password Should Include At Least One Digit.";
    }
    if (password != password2){
      errorTOThrow += "<br> Password Doest Not Match.";
    }
    if (password == password2){
      errorTOThrow += "<br> Password Matched";
    }
    throw errorTOThrow;
  }
  catch(err){
    errorMessage.innerHTML = err;
  }
}
