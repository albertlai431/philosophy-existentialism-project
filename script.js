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
  else if (username == "074568215" && password == "jh578okf")
    location = "accounts/bobby.html";
  else if (username == "334369486" && password == "uh648auf")
    location = "accounts/logan.html";
  else if (username == "071651565" && password == "yt454efd")
    location = "accounts/ian.html";
  else alert("Incorrect username or password! Please try again.");
  return false;
}
