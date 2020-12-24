var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "",
      text: "Hello Chris! How are you doing?",
    },
    {
      name: "Zoey",
      text: "Hi M. Sartre, it's been going okay I suppose",
    },
    {
      name: "",
      text: "That's good, how's school?",
    },
    {
      name: "Zoey",
      text:
        "It's been pretty solid I guess, my grades are pretty normal for me",
    },
    {
      name: "Zoey",
      text:
        "I'm not too pleased with them, but I've always been a pretty average student, so whatever",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/shru.png",
    },
    {
      name: "",
      text: "Hmmmmm okay",
    },
    {
      name: "",
      text: "So what would you like to talk about today?",
    },
    {
      name: "Zoey",
      text: "Well yeah so like I've kinda been thinking about my identity",
    },
    {
      name: "Zoey",
      text: "Cuz we're kinda writing an essay about it in English class",
    },
    {
      name: "Zoey",
      text: "And then I started thinking about my identity and like yeah",
    },
    {
      name: "Zoey",
      text: "Kinda like, who am I, you know?",
    },
    {
      name: "Zoey",
      text: "And sorta like what I should do with my life and stuff",
    },
    {
      name: "",
      text: "So what do you think your identity is?",
    },
    {
      name: "Zoey",
      text: "Well uh I don't really know",
    },
    {
      name: "Zoey",
      imageUrl: "./img/identity.jpg",
    },
    {
      name: "Zoey",
      text: "I guess it's a combination of stuff, like um",
    },
    {
      name: "Zoey",
      text: "I'm a short, caucassian teenager guy",
    },
    {
      name: "Zoey",
      text: "I'm shy and sorta awkward",
    },
    {
      name: "Zoey",
      text: "I'm an okay student but not that smart",
    },
    {
      name: "Zoey",
      text: "Um let's see I wanna be an accountant when I grow up",
    },
    {
      name: "",
      text: "Okay, let me stop you right there!",
    },
    {
      name: "Zoey",
      text: "Oh wait sorry what?",
    },
    {
      name: "",
      text: "What you are doing right now is using LABELS to define yourself",
    },
    {
      name: "",
      text:
        "However, these labels are actually fradulent! The issue is that these labels carry a lot of additional meanings and preconceived notions.",
    },
    {
      name: "",
      imageUrl: "./img/mask.jpg",
    },
    {
      name: "",
      text:
        "And as such, by allowing labels to provide us with our identities, we actually escape from the responsibility of defining ourselves.",
    },
    {
      name: "Zoey",
      text:
        "Uh well what if I'm okay with the defined by those preconceived notions?",
    },
    {
      name: "",
      text:
        "Chris, what you need to understand is that no matter how you think of yourself, you are a unique and complex individual in your own way!",
    },
    {
      name: "",
      text:
        "By accepting these labels, you assume an empty, lifeless identity and limit who you really are.",
    },
    {
      name: "",
      imageUrl: "./img/label.jpg",
    },
    {
      name: "",
      text:
        "What you need to do is cast aside these labels that limit you and describe your identity by what you specifically do, think, and stand for!",
    },
    {
      name: "Zoey",
      text: "Wow, uh that seems a bit tough, I don't really do much...",
    },
    {
      name: "",
      text:
        "Then do things you would be proud to include as part of your identity.",
    },
    {
      name: "",
      text:
        "And that starts with being more confident, recondering your career path, and rewriting that English essay!",
    },
    {
      name: "Zoey",
      text: "Okay M. Sartre, I will try that out now.",
    },
    {
      name: "",
      text:
        "Remember, though redefining yourself takes courage, it is also incredible worthwhile. I'm glad you've decided to attempt this endeavour.",
    },
    {
      name: "Zoey",
      text: "Thank you! Wow, that was a super insightful conversation.",
    },
    {
      name: "",
      text: "You're welcome!",
    },
    {
      name: "Zoey",
      text: "Have a wonderful day, M. Sartre!",
    },
    {
      name: "",
      text: "You too, bye now!",
    },
  ];

  function init() {
    sendMessage();
    messageInterval = setInterval(sendMessage, 0);
  }

  function sendMessage() {
    if (index < messages.length) {
      if (index > 0) {
        if (messages[index - 1].text === undefined) {
          currentTime += 500;
        } else {
          currentTime += messages[index - 1].text.length * 35;
        }
      } else currentTime += 1000;

      currentTime += 200;

      setTimeout(
        function (msg) {
          chat.displayMsg(msg);
        },
        currentTime,
        messages[index]
      );
      index += 1;
    } else {
      currentTime += 500;
      console.log(currentTime);
      clearInterval(messageInterval);
      setTimeout(function () {
        var dialog = document.getElementById("modal");
        dialog.show();
      }, currentTime);
    }
  }

  init();
};
