var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "",
      text: "Hallo Bobby! How are you?",
    },
    {
      name: "Zoey",
      text: "Hello Mister Heidegger.",
    },
    {
      name: "Zoey",
      text: "My current state is satisfactory.",
    },
    {
      name: "",
      text: "That's good! How's school?",
    },
    {
      name: "Zoey",
      text: "School is satisfactory.",
    },
    {
      name: "Zoey",
      text: "I have perfect grades in computer science and chemistry.",
    },
    {
      name: "Zoey",
      text: "I am doing considerably poorly in physics and advanced functions.",
    },
    {
      name: "Zoey",
      text: "Nonetheless, I will increase those two marks.",
    },
    {
      name: "",
      text: "Wonderful! So Bobby, what can I do for you today?",
    },
    {
      name: "Zoey",
      text:
        "Mister Heidegger, I would like to talk to you about a discourse I held with my mother, precisely nineteen hours prior.",
    },
    {
      name: "",
      text: "Absolutely! Please go ahead, Bobby.",
    },
    {
      name: "Zoey",
      text:
        "Again, she was berating me for playing League of Legends eight hours straight.",
    },
    {
      name: "Zoey",
      text:
        "I responded with the fact that my grades were over 98 percent, which are my parents standards.",
    },
    {
      name: "Zoey",
      text:
        "This time, rather than telling me I still had room to improve, she sighed and took a seat.",
    },
    {
      name: "Zoey",
      text:
        "She explained that she was worried that I was staying home all the time studying and gaming.",
    },
    {
      name: "",
      text: "Why do you spend so much time at home Bobby?",
    },
    {
      name: "Zoey",
      text: "Being at home is comfortable and manageable.",
    },
    {
      name: "Zoey",
      text:
        "I can keep with my routines and do as I please, which involves studying and gaming.",
    },
    {
      name: "",
      text:
        "Bobby, what you are referring to is known as being at home in the world.",
    },
    {
      name: "",
      imageUrl: "./img/comfortable.jpg",
    },
    {
      name: "",
      text: "How do you feel when you leave your house?",
    },
    {
      name: "Zoey",
      text: "I detest leaving my house.",
    },
    {
      name: "Zoey",
      text:
        "While being at school is a poor experience, I can still manage because I am so familiar with it.",
    },
    {
      name: "Zoey",
      text:
        "Otherwise, outside of that environment, I am always on guard and self-conscious due to the lack of predictability.",
    },
    {
      name: "Zoey",
      text:
        "I'd much rather stay home, instead of be somewhere I don't have to be.",
    },
    {
      name: "",
      text:
        "Would it be fair to say you feel more like yourself at home and feel alienated away from it?",
    },
    {
      name: "",
      imageUrl: "./img/alienated.jpg",
    },
    {
      name: "Zoey",
      text: "Mister Heidegger, that is an exact description of my experience.",
    },
    {
      name: "",
      text:
        "Bobby, this is because we don't experience the world as space quantitatively",
    },
    {
      name: "",
      imageUrl: "./img/google maps.jpg",
    },
    {
      name: "",
      text:
        "Rather than experiencing space as exact measurements, we relate to space in terms of whether or not we are home in it",
    },
    {
      name: "Zoey",
      text: "Why is this so?",
    },
    {
      name: "",
      text:
        "When you move to a different space that does not feel like home, you lose your sense of comfort.",
    },
    {
      name: "",
      text:
        "This is not due to the mathematical distance you are away from home, but instead due to the loss of familiarity and the feeling of at-homeness",
    },
    {
      name: "Zoey",
      text: "I believe I would agree with that, Mister Heidegger.",
    },
    {
      name: "Zoey",
      text:
        "I would feel further away from home at my high school's dance than a gaming café in Asia.",
    },
    {
      name: "",
      text:
        "However, you mother does hold some truth. In moving further away from home qualitatively, you gain a sense of anxiety",
    },
    {
      name: "",
      text:
        "While this anxiety creates those feelings we most detest, it is how you can activate your true potential in this world by owning your own experience",
    },
    {
      name: "Zoey",
      text:
        "I have already discovered that my potential is in school and gaming.",
    },
    {
      name: "",
      text: "How would you know otherwise if you've never tried otherwise?",
    },
    {
      name: "Zoey",
      text: "...",
    },
    {
      name: "Zoey",
      text: "I suppose I would not.",
    },
    {
      name: "",
      text:
        "Bobby, listen to your mother. Start going to these places that bring you anxiety, like school dances, club events, maybe even try sneaking into a nightclub!",
    },
    {
      name: "",
      text:
        "Start trying new things, such as making new friends, facing your fears, or even finding a girlfriend!",
    },
    {
      name: "",
      imageUrl: "./img/school dance.jpg",
    },
    {
      name: "",
      text:
        "Only in discovering your homelessness in this world can you truly find your authenticity, not a dream preordained for you by your parents.",
    },
    {
      name: "Zoey",
      text: "Yes, Mr. Heidegger.",
    },
    {
      name: "Zoey",
      text: "Thank you for the conversation.",
    },
    {
      name: "",
      text: "You're welcome Bobby! Have a great day.",
    },
    {
      name: "Zoey",
      text: "Bye Mister Heidegger.",
    },
    {
      name: "",
      text: "Goodbye!",
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
