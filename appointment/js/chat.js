var Chat = function () {
  var _this = this;
  var owner = "";
  var chatRoom = document.getElementById("messages");
  var chatHeight = chatRoom.offsetHeight;
  var padding = 5;

  function getTimeStamp() {
    var d = new Date();
    var h = d.getHours();
    var m = "0" + d.getMinutes();
    var ampm = h >= 12 ? "PM" : "AM";
    h -= h > 12 ? 12 : 0;
    h = h === 0 ? 12 : h;

    return h + ":" + m.substring(m.length - 2) + " " + ampm;
  }

  _this.displayMsg = function (msg) {
    var messageText = document.createElement("div");
    messageText.className = "messageText";
    messageText.innerHTML = msg.text;

    var strong = document.createElement("strong");
    strong.className = "nameInMessage";
    strong.innerHTML = msg.name;

    var div1 = document.createElement("div");
    div1.appendChild(strong);
    div1.appendChild(messageText);

    var message = document.createElement("div");
    message.className = "message";
    message.style.opacity = "1";
    message.appendChild(div1);

    var li = document.createElement("div");
    li.className =
      msg.name === owner
        ? "row me firstByThisGuy peckes"
        : "row he firstByThisGuy peckes";
    li.appendChild(message);

    chatRoom.appendChild(li);

    var size = chatRoom.children.length * 92;
    chatRoom.scrollIntoView(false);
  };

  _this.setOwner = function (ownerName) {
    owner = ownerName;
  };

  return _this;
};
