document.body.onload = function () {
  var chatRoom = new Chat();
  var owner = "Zoey";
  chatRoom.setOwner(owner);
  var chatSimulator = new MessagingSim(chatRoom);
};
