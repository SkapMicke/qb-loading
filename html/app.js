const { ref } = Vue
const load = Vue.createApp({
    setup () {
      const boring_facts = [
        "A duck's quack doesn't echo, and no one knows why.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Kangaroos can't hop backwards.",
        "The unicorn is the national animal of Scotland.",
        "The average person spends 6 months of their lifetime waiting on a red light to turn green.",
        "The sun is 330,330 times larger than the Earth.",
        "The first oranges weren't orange.",
        "Honey never spoils.",
        "A group of flamingos is called a flamboyance.",
        "The dot over the letter 'i' is called a tittle.",
        "Bananas are berries, but strawberries aren't.",
        "A day on Venus is longer than its year.",
        "The longest English word without a vowel is 'rhythms'.",
        "Sloths can hold their breath longer than dolphins.",
        "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'.",
        "Octopuses have three hearts.",
        "A small child could swim through the veins of a blue whale.",
        "The shortest war in history lasted only 38 minutes between Britain and Zanzibar.",
        "The national animal of Scotland is the unicorn.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible.",
        "The inventor of the Frisbee was turned into a Frisbee after he died.",
        "The unicorn is the national animal of Scotland.",
        "The word 'bookkeeper' (and its variants) is the only unhyphenated English word with three consecutive double letters.",
        "Polar bears are left-handed.",
        "The electric chair was invented by a dentist.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "The average person spends 6 months of their lifetime waiting on a red light to turn green.",
        "The sun is 330,330 times larger than the Earth.",
        "The first oranges weren't orange.",
        "Honey never spoils.",
        "A group of flamingos is called a flamboyance.",
        "The dot over the letter 'i' is called a tittle.",
        "Bananas are berries, but strawberries aren't.",
        "A day on Venus is longer than its year.",
        "The longest English word without a vowel is 'rhythms'.",
        "Sloths can hold their breath longer than dolphins.",
        "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'.",
        "Octopuses have three hearts.",
        "A small child could swim through the veins of a blue whale.",
        "The shortest war in history lasted only 38 minutes between Britain and Zanzibar.",
        "The national animal of Scotland is the unicorn.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible.",
        "The inventor of the Frisbee was turned into a Frisbee after he died.",
        "The unicorn is the national animal of Scotland.",
        "The word 'bookkeeper' (and its variants) is the only unhyphenated English word with three consecutive double letters.",
        "Polar bears are left-handed.",
        "The electric chair was invented by a dentist.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "The average person spends 6 months of their lifetime waiting on a red light to turn green.",
        "The sun is 330,330 times larger than the Earth.",
        "The first oranges weren't orange.",
        "Honey never spoils.",
        "A group of flamingos is called a flamboyance.",
        "The dot over the letter 'i' is called a tittle.",
        "Bananas are berries, but strawberries aren't.",
        "A day on Venus is longer than its year.",
        "The longest English word without a vowel is 'rhythms'.",
        "Sloths can hold their breath longer than dolphins.",
        "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'.",
        "Octopuses have three hearts.",
        "A small child could swim through the veins of a blue whale.",
        "The shortest war in history lasted only 38 minutes between Britain and Zanzibar.",
        "The national animal of Scotland is the unicorn.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are"
      ];
  
      const boring_sub_facts = [
        "Isn't that fascinating?",
        "Amazing, right?",
        "Who would've thought?",
        "Mind-blowing, isn't it?",
        "Just another boring fact!",
        "Such mundane knowledge!",
        "The world is full of wonders!",
        "Fascinating, but not really!",
        "Knowledge is power, they say!",
        "Now you know!",
        "Isn't that fascinating?",
        "Amazing, right?",
        "Who would've thought?",
        "Mind-blowing, isn't it?",
        "Just another boring fact!",
        "Such mundane knowledge!",
        "The world is full of wonders!",
        "Fascinating, but not really!",
        "Knowledge is power, they say!",
        "Now you know!",
        "Isn't that fascinating?",
        "Amazing, right?",
        "Who would've thought?",
        "Mind-blowing, isn't it?",
        "Just another boring fact!",
        "Such mundane knowledge!",
        "The world is full of wonders!",
        "Fascinating, but not really!",
        "Knowledge is power, they say!",
        "Now you know!",
        "Isn't that fascinating?",
        "Amazing, right?",
        "Who would've thought?",
        "Mind-blowing, isn't it?",
        "Just another boring fact!",
        "Such mundane knowledge!",
        "The world is full of wonders!",
        "Fascinating, but not really!",
        "Knowledge is power, they say!",
        "Now you know!",
        "Isn't that fascinating?",
        "Amazing, right?",
        "Who would've thought?",
        "Mind-blowing, isn't it?",
        "Just another boring fact!",
        "Such mundane knowledge!",
        "The world is full of wonders!",
        "Fascinating, but not really!",  
      ];
  
      const getRandomIndex = () => Math.floor(Math.random() * 10);
  
      return {
        CarouselText1: boring_facts[getRandomIndex()],
        CarouselSubText1: boring_sub_facts[getRandomIndex()],
        CarouselText2: boring_facts[getRandomIndex()],
        CarouselSubText2: boring_sub_facts[getRandomIndex()],
        CarouselText3: boring_facts[getRandomIndex()],
        CarouselSubText3: boring_sub_facts[getRandomIndex()],
        CarouselText4: boring_facts[getRandomIndex()],
        CarouselSubText4: boring_sub_facts[getRandomIndex()],
  
        DownloadTitle: 'Downloading QBCore Server',
        DownloadDesc: "Hold tight while we begin downloading all the resources/assets required to play on QBCore Server. \n\nAfter download has been finished successfully, you'll be placed into the server and this screen will disappear. Please don't leave or turn off your PC. ",
  
        SettingsTitle: 'Settings',
        AudioTrackDesc1: 'When disabled the current audio-track playing will be stopped.',
        AutoPlayDesc2: 'When disabled carousel images will stop cycling and remain on the last shown.',
        PlayVideoDesc3: 'When disabled video will stop playing and remain paused.',
  
        KeybindTitle: 'Default Keybinds',
        Keybind1: 'Open Inventory',
        Keybind2: 'Cycle Proximity',
        Keybind3: 'Open Phone',
        Keybind4: 'Toggle Seat Belt',
        Keybind5: 'Open Target Menu',
        Keybind6: 'Radial Menu',
        Keybind7: 'Open Hud Menu',
        Keybind8: 'Talk Over Radio',
        Keybind9: 'Open Scoreboard',
        Keybind10: 'Vehicle Locks',
        Keybind11: 'Toggle Engine',
        Keybind12: 'Pointer Emote',
        Keybind13: 'Keybind Slots',
        Keybind14: 'Hands Up Emote',
        Keybind15: 'Use Item Slots',
        Keybind16: 'Cruise Control',
  

      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('5'),
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(true),
      settings: ref(false),
    }
  }
})


load.use(Quasar, { config: {} })
load.mount('#loading-main')

var audio = document.getElementById("audio");
audio.volume = 0.05;

function audiotoggle() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function videotoggle() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};
window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});
