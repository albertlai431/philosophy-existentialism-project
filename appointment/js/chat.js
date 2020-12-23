var Chat = function () {
  var _this = this;
  var owner = "";
  var chatRoom = document.getElementById("messages");
  var chatHeight = chatRoom.offsetHeight;
  var padding = 5;

  _this.displayMsg = function (msg) {
    //check image
    var messageText;
    if (msg.text === undefined) {
      //img
      if (msg.emojiUrl === undefined) {
        messageText = document.createElement("img");
        messageText.src = msg.imageUrl;
      }
      //emoji
      else {
        messageText = document.createElement("img");
        messageText.src = msg.emojiUrl;
        messageText.className = "emojimg";
      }
    } else {
      messageText = document.createElement("div");
      messageText.className = "messageText";
      messageText.innerHTML = msg.text;
    }

    var strong = document.createElement("strong");
    strong.className = "nameInMessage";
    strong.innerHTML = msg.name;

    var div1 = document.createElement("div");
    div1.appendChild(strong);
    div1.appendChild(messageText);

    var message = document.createElement("div");
    message.className = msg.emojiUrl === undefined ? "message" : "emoji";
    message.style.opacity = "1";
    message.appendChild(div1);

    var li = document.createElement("div");
    //me
    if (msg.name === owner) {
      if (msg.text === undefined) {
        //img
        if (msg.emojiUrl === undefined) {
          li.className = "row me peckes noTextMessage";
        }
        //emoji
        else {
          li.className = "row me emojiIncluded noTextMessage peckes";
        }
      } else {
        li.className = "row me firstByThisGuy peckes";
      }
    }
    //he
    else {
      if (msg.text === undefined) {
        //img
        if (msg.emojiUrl === undefined) {
          li.className = "row he peckes noTextMessage";
        }
        //emoji
        else {
          li.className = "row he emojiIncluded noTextMessage peckes";
        }
      } else {
        li.className = "row he firstByThisGuy peckes";
      }
    }
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
