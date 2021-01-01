var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "Zoey",
      text: "HIIII MR. HEIDEGGER!!!",
    },
    {
      name: "",
      text: "Hallo Amanda! What can I do for you today?",
    },
    {
      name: "Zoey",
      text: "WELL OKAY yikessss",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/confounded.png",
    },
    {
      name: "Zoey",
      text: "Ahhh okay okay this is kinda tough!!!",
    },
    {
      name: "Zoey",
      text: "Oh well here goes nothinggggg",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/blush.png",
    },
    {
      name: "Zoey",
      text: "SOOO remember how I was talking to u abt my uni apps??!!",
    },
    {
      name: "",
      text:
        "Absolutely! You applied to both medical and business programs, if I'm correct!",
    },
    {
      name: "Zoey",
      text: "YESSIR",
    },
    {
      name: "Zoey",
      text:
        "And am happy to report I GOT INTO MY TOP CHOICES FOR BOTH OF EM!!!!!",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/sunglasses.png",
    },
    {
      name: "",
      text: "Wonderful, congratulations Amanda!",
    },
    {
      name: "Zoey",
      text: "Yahhhh so I'm like superrrrr pumped and all...",
    },
    {
      name: "Zoey",
      text: "But ahhhh idk which one to choose!!!",
    },
    {
      name: "Zoey",
      text: "Cuz like McMaster Heath Sci is literally the bestttt",
    },
    {
      name: "Zoey",
      text: "But Queen's Commerce is really good too, aghhhhh",
    },
    {
      name: "",
      text:
        "Would you say that you are perhaps, experiencing some existential angst?",
    },
    {
      name: "Zoey",
      text: "AHAHAHAA THAT IS A FUNNY WORD",
    },
    {
      name: "Zoey",
      text: "But man yea I just feel so anxious about this... I'm so torn!",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/anxious.png",
    },
    {
      name: "",
      text: "I'm guessing you don't like this feeling?",
    },
    {
      name: "Zoey",
      text: "Yah no kidding man...",
    },
    {
      name: "Zoey",
      text: "I'd much rather be out chatting with my friendssss :DDDDD",
    },
    {
      name: "Zoey",
      text:
        "Or watching a movie, working on a business case, or even doing a bio test",
    },
    {
      name: "Zoey",
      text:
        "But I can't be engaged in those things with this kinda deep dreaded feeling, ya know?",
    },
    {
      name: "Zoey",
      text:
        "Like I gotta spend the NEXT 2 DAYS figuring out this ANNOYING decision before the deadline",
    },
    {
      name: "Zoey",
      imageUrl: "./img/anxiety.jpg",
    },
    {
      name: "",
      text: "Amanda, let me let you in on a secret!",
    },
    {
      name: "Zoey",
      text: "OOOOOOH SECRET! DO TELL",
    },
    {
      name: "",
      text:
        "This dread, or anxiety, you are talking about, is actually an incredible opportunity!",
    },
    {
      name: "Zoey",
      text: "SAY WHAT?!",
    },
    {
      name: "",
      text:
        "See, those activites you were talking about before are when you are engaged in the world.",
    },
    {
      name: "",
      imageUrl: "./img/phone.jpg",
    },
    {
      name: "",
      text:
        "When you're doing those things, time flies and you're fully into the moment, right?",
    },
    {
      name: "Zoey",
      text:
        "Yeahhh, you're kinda just in... like a happy flowwwww ya knowwww!! just groovin alonggg",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/groovy.png",
    },
    {
      name: "",
      text:
        "Right! But as a result, you also lose yourself in the world when you're engaged in it!",
    },
    {
      name: "",
      text: "When you're engaged, you don't question your identity, and your",
    },
    {
      name: "",
      text: "DASEIN",
    },
    {
      name: "",
      text: "loses sense of itself!",
    },
    {
      name: "Zoey",
      text: "LMAOOOO WHAT IS DASEIN",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/laugh.png",
    },
    {
      name: "",
      text: "DASEIN",
    },
    {
      name: "",
      text: "is the relationship you hold with the world!",
    },
    {
      name: "",
      text:
        "When you are engaged, you are at home in the world. You're comfortable because you allow your identity to be defined by others.",
    },
    {
      name: "",
      text:
        'You live as a "they-self" rather than a unique individual, and by doing so, disown your own reality in favour for the feeling of being at home in the world.',
    },
    {
      name: "",
      imageUrl: "./img/girls.jpg",
    },
    {
      name: "Zoey",
      text: "What about when I'm anxious?? LIKE RIGHT NOW?!!",
    },
    {
      name: "",
      text:
        'In times of anxiety, you are torn apart from the world. You\'re taken out of the "they", forced to confront yourself and determine what really matters to you!',
    },
    {
      name: "Zoey",
      text: "Like which university I should go to?",
    },
    {
      name: "",
      text:
        "Exactly! Right now, you have the unique opportunity to be an individual and discover your true authentic self!",
    },
    {
      name: "",
      text:
        "You must ultimately courageously make this choice yourself because this is your chance to rule your world and design your path!",
    },
    {
      name: "Zoey",
      text: "Wow, I came to you for answers...",
    },
    {
      name: "Zoey",
      text: "And the answer is that I must decide for myself!",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/exploding-head.png",
    },
    {
      name: "",
      text:
        'Indeed! I will not give you any advice on what to choose, except that you must choose yourself and must NOT passively sink back into the "they-self".',
    },
    {
      name: "",
      imageUrl: "./img/i-want-you.jpg",
    },
    {
      name: "Zoey",
      text:
        "You're not even gonna tell me like, consider the location and cost of the program? Or I should study something I love?",
    },
    {
      name: "",
      text: "Nope! Those are values you must weigh yourself!",
    },
    {
      name: "Zoey",
      text: "WOW Okay!!! THAT IS KINDA COOL",
    },
    {
      name: "Zoey",
      text: "Tysmmm Mr. Heidegger!",
    },
    {
      name: "",
      text:
        "My pleasure, Amanda! Hope you find your authenticity, and have a day filled with anxiety and dread!",
    },
    {
      name: "Zoey",
      text: "Byeeeeeeeeeeeeeeeeeee",
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
