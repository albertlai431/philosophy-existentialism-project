var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "Zoey",
      text: "Hello Mme. Beauvoir!",
    },
    {
      name: "",
      text: "Hello Felicity! Great to see you again, how may I help you today?",
    },
    {
      name: "Zoey",
      text: "As you know, I'm currently taking the equity course",
    },
    {
      name: "",
      text: "Of course!",
    },
    {
      name: "Zoey",
      text:
        "Yesterday, we were learning about the injustice women face throughout society and I just felt so angry!",
    },
    {
      name: "Zoey",
      imageUrl: "./img/wage gap.jpg",
    },
    {
      name: "Zoey",
      text:
        "It's so unfair that just because we're females we have to deal with this inequity",
    },
    {
      name: "Zoey",
      text:
        "I just feel so oppressed by society as a whole and really want to do something about it!",
    },
    {
      name: "",
      text: "Felicity, do you know what feminism is?",
    },
    {
      name: "Zoey",
      text: "Of course! I would definitely consider myself to be one.",
    },
    {
      name: "Zoey",
      imageUrl: "./img/feminism.png",
    },
    {
      name: "",
      text: "Tell me, do you plan on getting married?",
    },
    {
      name: "Zoey",
      text: "Yes, I think so...",
    },
    {
      name: "Zoey",
      text:
        "I'm actually dating the most wonderful guy right now! I can't imagine life without him, we've touched on marriage once or twice",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/heart-eyes.png",
    },
    {
      name: "",
      text:
        "Felicity, as a true feminist, you must not even entertain the thought of marriage!",
    },
    {
      name: "",
      imageUrl: "./img/reject marriage.jpg",
    },
    {
      name: "Zoey",
      text: "I'm sorry, but why not?",
    },
    {
      name: "",
      text:
        "Felicity, please understand that the very act of marriage and starting a family is what destroys all women!",
    },
    {
      name: "",
      text:
        "Family is simply a social construct created by men to oppress women as they are inherently patriarchal.",
    },
    {
      name: "Zoey",
      text:
        "Haven't things improved though? It was definitely patriarchal in the past, but not so much anymore.",
    },
    {
      name: "",
      text: "Even so, subtle patriarchy still exists.",
    },
    {
      name: "",
      text: "Why is the wife the one that must assume her husband's surname?",
    },
    {
      name: "",
      text:
        "Why are the family businesses passed down to the sons and not the daughters?",
    },
    {
      name: "",
      text:
        "Ultimately, as soon as we enter a marriage, our identity becomes contructed by the men (identity construction).",
    },
    {
      name: "",
      text:
        "This is why you see the wives staying taking care of the baby, doing the menial housechores.",
    },
    {
      name: "",
      imageUrl: "./img/chores.jpg",
    },
    {
      name: "Zoey",
      text: "Wow, you do have a point! I really want to have a baby though...",
    },
    {
      name: "",
      text:
        "Felicity, please! Motherhood is the most atrocious form of imprisonment.",
    },
    {
      name: "",
      text:
        "By bearing the baby you are riveted to your body and the worst horrors of female oppression are flung upon to you.",
    },
    {
      name: "",
      text:
        "No you must vow to me that you will never marry nor birth a child.",
    },
    {
      name: "Zoey",
      text: "Wow, okay...",
    },
    {
      name: "Zoey",
      text: "Ummm",
    },
    {
      name: "Zoey",
      text: "I vow to never marry nor birth a child.",
    },
    {
      name: "",
      text: "Congratulations, Felicity!",
    },
    {
      name: "Zoey",
      text: "Thank you, Mme. Beauvoir!",
    },
    {
      name: "Zoey",
      text: "Wow, I feel so relieved now!",
    },
    {
      name: "Zoey",
      text: "Wait, I'm still allowed to have sex though right?",
    },
    {
      name: "",
      text: "My dear Felicity, that is a topic for another time!",
    },
    {
      name: "",
      text:
        "I must get to my next appointment now, but I hope this appointment was helpful!",
    },
    {
      name: "Zoey",
      text: "Absolutely, have a great day Mme. Beauvoir!",
    },
    {
      name: "",
      text: "You as well. Goodbye!",
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
          currentTime += messages[index - 1].text.length * 30;
        }
      } else currentTime += 1000;

      currentTime += 250;

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
