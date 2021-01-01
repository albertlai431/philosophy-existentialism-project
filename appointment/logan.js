var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "Zoey",
      text: "Hi M. Sartre!!",
    },
    {
      name: "",
      text: "Hello Logan! How are things?",
    },
    {
      name: "Zoey",
      text:
        "Things are great! Amber and I just had our 6 month dating anniversary",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/smiling-face-with-hearts.png",
    },
    {
      name: "",
      text:
        "Wow, that's great! High school relationships don't usually last this long...",
    },
    {
      name: "Zoey",
      text: "Nah, Amber and I, we in it FOR REAL HERE",
    },
    {
      name: "Zoey",
      text: "Oh man, like I LOVE her sooo much, you wouldn't understand",
    },
    {
      name: "Zoey",
      text: "She is just SO BAE, you know??",
    },
    {
      name: "",
      text: "Ah, of course, I'm sure you are very infatuated with her.",
    },
    {
      name: "Zoey",
      text:
        "Yeah, right? So the thing is, we've been dating for quite a while now",
    },
    {
      name: "Zoey",
      text: "And um how do I say this...",
    },
    {
      name: "Zoey",
      text: "We haven't gotten very physical yet",
    },
    {
      name: "Zoey",
      text:
        "I mean okok like we hug and kiss and stuff and that's like superrrr great",
    },
    {
      name: "Zoey",
      imageUrl: "./img/couple-hugging.jpg",
    },
    {
      name: "Zoey",
      text:
        "But I really wanna take things further with her if you know what I mean!",
    },
    {
      name: "",
      text: "Are you referring to sexual intercourse?",
    },
    {
      name: "Zoey",
      text: "aGH MAN why you gotta say it LIKE THAT?!",
    },
    {
      name: "Zoey",
      text:
        "But no, not even like that, even just like touching each other more intimately, and um maybe even going a little further than that",
    },
    {
      name: "Zoey",
      text:
        "Cuz my older brother was talking to me about it, and it just seems like a really incredible and amazing experience",
    },
    {
      name: "Zoey",
      text: "But I don't wanna force her into you it you know?",
    },
    {
      name: "Zoey",
      text:
        "Like I don't wanna make it seem like I'm being selfish cuz I just wanna feel good",
    },
    {
      name: "Zoey",
      text:
        "So yeah, I'm basically trying to figure out how to approach this topic with her",
    },
    {
      name: "",
      text:
        "Hmmm, Logan, I think you might be thinking about it from the wrong angle",
    },
    {
      name: "",
      text: "Tell me, how did you and Amber start dating?",
    },
    {
      name: "Zoey",
      text:
        "Aw man, that was the best day of my life, I remember it so clearly!",
    },
    {
      name: "Zoey",
      text: "Man I could go about that day forever!",
    },
    {
      name: "",
      text: "Keep it brief, please",
    },
    {
      name: "Zoey",
      text:
        "Okay yeah right, so I went with her to the movies, and then we had a fantastic dinner in the sunset, where I asked her out, and then she said yes!",
    },
    {
      name: "",
      text: "Would you still love her if she rejected you?",
    },
    {
      name: "Zoey",
      text: "Uh no!! Of course not!",
    },
    {
      name: "",
      text:
        "So what you are saying when you say you love her, is really that you want her to love you?",
    },
    {
      name: "",
      imageUrl: "./img/love-me.jpg",
    },
    {
      name: "Zoey",
      text:
        "Hmmm, uh yeah, in a way yes! I wouldn't love her if she didn't love me",
    },
    {
      name: "Zoey",
      text: "I want her to be the one who picks me to be the one, you know!",
    },
    {
      name: "",
      text: "That's exactly my point: love is inherently selfish.",
    },
    {
      name: "",
      text:
        "You want her to say that she loves you, or that you are important and at the center of the universe",
    },
    {
      name: "",
      imageUrl: "./img/center.jpeg",
    },
    {
      name: "Zoey",
      text:
        "Gee, that's taking it a bit far don't ya think? I just want some validation hahaha",
    },
    {
      name: "",
      text:
        "Logan, the sexual activity you are seeking is the highest form of validation",
    },
    {
      name: "",
      text:
        'You see, you are a what we call a "being-for-itself", since like all humans, you are a being who is aware of yourself!',
    },
    {
      name: "",
      text:
        'However, in relationships to others, you become a "being-for-others".',
    },
    {
      name: "Zoey",
      text: "Huh? Why??",
    },
    {
      name: "",
      text:
        'This is because, as both people in that relationship are "being-for-itself", you both each experience the other as an object. ',
    },
    {
      name: "",
      text:
        'And so ultimately, you are the way others see you, an object others impose their reality on, hence becoming a "being-for-others".',
    },
    {
      name: "",
      imageUrl: "./img/human object.jpg",
    },
    {
      name: "Zoey",
      text: "Okay... and LOL what does this have to do with sex??",
    },
    {
      name: "",
      text:
        'When you crave sex, you are actually craving to have another "being-for-itself" who chooses to allow you to make an object of them',
    },
    {
      name: "",
      text:
        'When this happens, the fact that you are a "being-for-itself", not an object, is recognized',
    },
    {
      name: "",
      text:
        "And thus, the sole purpose of sex is for you to feel empowered as a human being",
    },
    {
      name: "",
      imageUrl: "./img/empowerment.jpg",
    },
    {
      name: "Zoey",
      text: "Wow jeez okayyy",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/exploding-head.png",
    },
    {
      name: "Zoey",
      text: "So what do I tell Amber???",
    },
    {
      name: "",
      text: "Tell her that you would like to feel empowered!",
    },
    {
      name: "Zoey",
      text: "And what if she refuses?",
    },
    {
      name: "",
      text:
        "Find someone else to make you feel empowered! The world is your oyster my friend.",
    },
    {
      name: "",
      text:
        "And of course, it is okay to have multiple people help you feel empowered!",
    },
    {
      name: "Zoey",
      text:
        "Wow ummm okay I can't believe my guidance counsellor is encouraging polyamory LOL",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/laugh.png",
    },
    {
      name: "Zoey",
      text: "But can't hurt to go with this, as long as it's consensual right?",
    },
    {
      name: "",
      text:
        "Exactly! That is first and foremost, to ensure the law is followed.",
    },
    {
      name: "Zoey",
      text: "Well awesome, I'll try this out and let you know how it goes :)",
    },
    {
      name: "",
      text: "Good luck Logan! I hope you find your affirmation!",
    },
    {
      name: "Zoey",
      text: "Thank you, M. Sartre! Hope you have a good day!",
    },
    {
      name: "",
      text: "Bye bye",
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
