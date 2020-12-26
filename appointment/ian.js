var MessagingSim = function (chat) {
  var _this = this;
  var messageInterval;
  var index = 0;
  var currentTime = 0;

  var messages = [
    {
      name: "",
      text: "Hello Ian!",
    },
    {
      name: "Zoey",
      text: "Hey M. Sartre! Hope you're doing well!",
    },
    {
      name: "",
      text: "Indeed, I am! How are you doing?",
    },
    {
      name: "Zoey",
      text: "Well, I came to you because... well I have a bit of a dilemma!",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/confounded.png",
    },
    {
      name: "Zoey",
      text: "As you know, I really wanna go to business school for undergrad.",
    },
    {
      name: "Zoey",
      text:
        "Both of my parents went to Western Ivey and I want to follow in their footsteps!",
    },
    {
      name: "Zoey",
      text:
        "But ever since I started taking more business courses, I realized that I might actually like engineering better...",
    },
    {
      name: "",
      text: "Do you have space in your schedule to make the switch?",
    },
    {
      name: "Zoey",
      text:
        "Ughhh yeah so the thing is I'll have to add both physics and chemistry into my schedule next semester since it's too late to switch into them now...",
    },
    {
      name: "Zoey",
      text:
        "But I'll have to either summer school or night school one of them, which might be really tough!!",
    },
    {
      name: "Zoey",
      text:
        "And since I already put so much into the path I'm on, I feel like I have to just stick with what I've been doing",
    },
    {
      name: "",
      text:
        "Ian, please understand that it is bad faith to deny your transcendence!",
    },
    {
      name: "Zoey",
      text: "LOL WAIT it is bad what to deny my what??",
    },
    {
      name: "",
      text: "I'm sorry, let me back up! Ian, do you believe you have freedom?",
    },
    {
      name: "Zoey",
      text: "Yeah I mean I live in Canada haha",
    },
    {
      name: "",
      text:
        "Your freedom is a combination of two things, which are in constant flux and conflict with one another.",
    },
    {
      name: "",
      text:
        "The first is facticity: your past, the choices you have made, and who you were prior to this moment",
    },
    {
      name: "",
      text:
        "The second is transcendence: your future self and the choices you will make!",
    },
    {
      name: "",
      imageUrl: "./img/ppf.jpg",
    },
    {
      name: "",
      text:
        'Right now, you are denying your transcendence. By saying you "have to" continue your current path, you are allowing your past choices to define who you are right now and influence your choices.',
    },
    {
      name: "",
      text:
        "This is called bad faith, when you deny either one of facticity or transcendence.",
    },
    {
      name: "",
      imageUrl: "./img/denial.jpg",
    },
    {
      name: "Zoey",
      text: "Jeez I feel attacked LOL",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/laugh.png",
    },
    {
      name: "Zoey",
      text: "What are the consequences of bad faith??",
    },
    {
      name: "",
      text:
        "By denying your transcendence, you essentially live in reruns of your own life. By assuming the same roles you've been dealt and replaying the same hand, you allow who you ARE right now to be who you WERE.",
    },
    {
      name: "",
      imageUrl: "./img/seen before.jpg",
    },
    {
      name: "",
      text: "In doing so, you limit your freedom and potential.",
    },
    {
      name: "",
      text:
        'Because you are really just deluding yourself when you say you "have to" do something, since there\'s nothing you really "have to" do.',
    },
    {
      name: "",
      text:
        "Of course, it is scary to face the anxiety of freedom! It is far easier to let go of the responsibility of your choices and instead believe you are being forced to do things.",
    },
    {
      name: "",
      text:
        "However, especially at such an important crossroads in your life, you have the opportunity to transcend yourself and become a better version of you!",
    },
    {
      name: "Zoey",
      text: "So you're telling me I should go with engineering?",
    },
    {
      name: "",
      text:
        "No, I am telling you that you have the choice to transcend your past and determine your own future independnt of it!",
    },
    {
      name: "",
      imageUrl: "./img/transcend.jpg",
    },
    {
      name: "Zoey",
      text: "LOL you mean like... consider going to college??",
    },
    {
      name: "",
      text: 'Exactly! Do you think you "have to" go to university?',
    },
    {
      name: "Zoey",
      text: "Okay I guess that is sorta facts",
    },
    {
      name: "",
      text:
        "Who told you even have to attend post-secondary? Or even graduate high school?",
    },
    {
      name: "Zoey",
      text: "You're right! I can even just leave home and do whatever I want!",
    },
    {
      name: "Zoey",
      text:
        "Jeez okay but since everything is my choice, then whatever happens is because of me??",
    },
    {
      name: "",
      text:
        "Absolutely, that is what taking responsibility of your choices means!",
    },
    {
      name: "",
      text:
        "When things go wrong, you have no one to blame but yourself. But you are also credited with your successes!",
    },
    {
      name: "Zoey",
      text: "Damnnn okay that's kinda scary!",
    },
    {
      name: "Zoey",
      emojiUrl: "./img/anxious.png",
    },
    {
      name: "",
      text:
        "But also immensely fulfilling. You get to create your own meaning and figure out what matters to you!",
    },
    {
      name: "Zoey",
      text: "Wow okay, man I have a lot of work to do!",
    },
    {
      name: "Zoey",
      text: "Thank you so much M. Sartre!",
    },
    {
      name: "",
      text: "A pleasure, Ian! Go out there and find your freedom.",
    },
    {
      name: "Zoey",
      text: "Will do! Bye bye!",
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
