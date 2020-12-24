function checkAnswer() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "349865215" && password == "tf697asm")
    location = "accounts/sally.html";
  else if (username == "072659842" && password == "pk420qqq")
    location = "accounts/felicity.html";
  else if (username == "075468925" && password == "gg562few")
    location = "accounts/chris.html";
  else if (username == "369420666" && password == "ff666lol")
    location = "accounts/amanda.html";
  else alert("Incorrect username or password! Please try again.");
  return false;
}
