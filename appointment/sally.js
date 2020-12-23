var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "",
      text: "Bonjour, Sally! Comment ça va?",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/face-with-raised-eyebrow.png",
    },
    {
      name: "Zoey",
      text: "Sorry M. Camus, I'm not french immersion...",
    },
    {
      name: "",
      text: "Ah, désolée! Sorry, I was asking how are you?",
    },
    {
      name: "Zoey",
      text: "Terrible.",
    },
    {
      name: "Zoey",
      text: "Absolutely terrible.",
    },
    {
      name: "Zoey",
      text: "Lowkey considering killing myself",
    },
    {
      name: "",
      text: "Wonderful! Sally, ma chérie, that is the question!",
    },
    {
      name: "",
      text: "In fact, that is the ONLY question.",
    },
    {
      name: "Zoey",
      text: "Wow, okay wait did not expect that...",
    },
    {
      name: "Zoey",
      text: "I thought you'd try to talk me out of it LOL",
    },
    {
      name: "",
      text:
        "Non, Sally, I would just like to hear about what led you to this wonderful question!",
    },
    {
      name: "Zoey",
      text:
        "Umm okay, so basically, remember how I came to you two months ago and asked you how I could improve my grades?",
    },
    {
      name: "",
      text: "Oui, yes I do!",
    },
    {
      name: "Zoey",
      text:
        "Right, so for the past two months, I've been following your advice to work harder.",
    },
    {
      name: "Zoey",
      text:
        "Well ACTUALLY, I've slaving away like a dog, putting 16, 17 hours tops into my school work.",
    },
    {
      name: "Zoey",
      text:
        "And it worked! My grades went from 60s to 90s (except for that pesky Business Leadership course).",
    },
    {
      name: "Zoey",
      text: "But rather than feeling accomplished, I feel kinda empty",
    },
    {
      name: "Zoey",
      text:
        "Like I put in all this work, lost all my friends, got diabetes and a heart attack after sitting for too long...",
    },
    {
      name: "Zoey",
      text: "And yay I have epic grades but now I'm like what's the point???",
    },
    {
      name: "Zoey",
      imageUrl: "./img/suicidal.png",
    },
    {
      name: "",
      text: "Ah, I see, so you found your endeavour ultimately meaningless?",
    },
    {
      name: "Zoey",
      text:
        "Exactly, like I'm putting so much time and effort into stuff that doesn't even matter",
    },
    {
      name: "Zoey",
      text:
        "And even if it does matter, I'm gonna die anyways, so nothing really matters",
    },
    {
      name: "Zoey",
      text:
        "So rather than putting in this useless work, if I kill myself, I won't have to do any work and it won't make any difference",
    },
    {
      name: "",
      text: "Incredible, Sally! That is a brilliant observation",
    },
    {
      name: "",
      text: "But before you continue, can I tell you a little story?",
    },
    {
      name: "Zoey",
      text: "Sure whatever we're all gonna die anyways",
    },
    {
      name: "",
      imageUrl: "./img/sisyphus.jpg",
    },
    {
      name: "",
      imageUrl: "./img/sisyphus2.jpg",
    },
    {
      name: "Zoey",
      text: "BRO WHAT WHY R U SENDING ME PICS OF NAKED GREEK DUDES",
    },
    {
      name: "Zoey",
      text: "That can't be school appropriate...",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/flushed-face.png",
    },
    {
      name: "",
      text: "NON NON NON, c'est le Myth of Sisyphus!",
    },
    {
      name: "",
      text:
        "Alors, so long story short, Sisyphus was a terrible trickster, and so he was punished by the gods to a terrible fate.",
    },
    {
      name: "Zoey",
      text: "Awesome sounds fun, what was it?",
    },
    {
      name: "",
      text:
        "All Sisyphus would have to do was roll an immense boulder up a hill.",
    },
    {
      name: "",
      text:
        "However, everytime the boulder neared the top, it would roll back down, and Sisyphus would have to do it all over again.",
    },
    {
      name: "",
      text:
        "Essnetially, that meant that Sisyphus would be rolling this boulder for eternity.",
    },
    {
      name: "Zoey",
      text: "Rip that's kinda tragic",
    },
    {
      name: "Zoey",
      text:
        "Would hate to be that guy, ugh, putting in all that work for nothing",
    },
    {
      name: "",
      text: "...",
    },
    {
      name: "Zoey",
      text: "LOL WAIT",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/exploding-head.png",
    },
    {
      name: "",
      text:
        "Ma chérie, we are all like Sisyphus. Our lives are filled with struggle, which ultimately amount to nothing.",
    },
    {
      name: "Zoey",
      text: "Lovely lemme get the bleach now then",
    },
    {
      name: "",
      text: "Ah, but I am not finished yet!",
    },
    {
      name: "",
      text: "Here's the key: imagining Sisyphus happy.",
    },
    {
      name: "",
      text:
        "Even if your life is inherently meaningless, you can find meaning and happiness from the struggle.",
    },
    {
      name: "Zoey",
      text: "Huh? Sir, that makes no sense.",
    },
    {
      name: "",
      text: "The point is, you must determine meaning for yourself.",
    },
    {
      name: "",
      text:
        "Find something you enjoy struggling towards and can find meaning out of.",
    },
    {
      name: "Zoey",
      text:
        "Well, I don't enjoy the struggle I face in school studying useless subjects.",
    },
    {
      name: "",
      text: "What do you enjoy struggling towards?",
    },
    {
      name: "Zoey",
      text:
        "Well to be honest, I love mountain climbing. The relentless hours of training and the exhiliaration of scaling the summit.",
    },
    {
      name: "Zoey",
      imageUrl: "./img/climbing.jpg",
    },
    {
      name: "Zoey",
      text:
        "It's my goal to climb Everest one day, but I can't do that while I'm stuck in stupid school.",
    },
    {
      name: "",
      text: "Well, that's easy! Ma chérie, the answer is clear...",
    },
    {
      name: "",
      text: "Drop out of school and choose the struggles you love.",
    },
    {
      name: "Zoey",
      text: "JEEZ SIR U R THE COOLEST GUIDANCE COUNSELLOR EVER",
    },
    {
      name: "Zoey",
      text: "That's kinda drastic tho, Ima think abt that",
    },
    {
      name: "Zoey",
      text: "But wow, thank you!!",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/folded-hands.png",
    },
    {
      name: "",
      text: "Glad to help, Sally!",
    },
    {
      name: "",
      text: "Enjoy your struggles :)",
    },
    {
      name: "Zoey",
      text: "Bye, M. Camus!",
    },
    {
      name: "",
      text: "Bonne journée, Sally!",
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
