const cardArray = [
  {
    name: "Hinata",
    img: "images/hinata_surreal.jpg",
  },
  {
    name: "Kagura",
    img: "images/hinokami kagura synthwave.jpg",
  },
  {
    name: "JoJo",
    img: "images/JoJo Provenence.jpg",
  },
  {
    name: "Ito",
    img: "images/Junji Ito Etching.jpg",
  },
  {
    name: "Naruto",
    img: "images/naruto_surreal.jpg",
  },
  {
    name: "Madara",
    img: "images/Uchiha Madara Dark Fantasy.jpg",
  },
  {
    name: "Hinata",
    img: "images/hinata_surreal.jpg",
  },
  {
    name: "Kagura",
    img: "images/hinokami kagura synthwave.jpg",
  },
  {
    name: "JoJo",
    img: "images/JoJo Provenence.jpg",
  },
  {
    name: "Ito",
    img: "images/Junji Ito Etching.jpg",
  },
  {
    name: "Naruto",
    img: "images/naruto_surreal.jpg",
  },
  {
    name: "Madara",
    img: "images/Uchiha Madara Dark Fantasy.jpg",
  },
  //   {
  //     name: "Blank",
  //     img: "images/Blank_TradingCard.jpg",
  //   },
  //   {
  //     name: "Hentai",
  //     img: "images/Hentai_Synthwave.jpg",
  //   },
];

// console.log(cardArray); //testing omgg fuck i wasnt getting any error cuz it was executing before sort code function
//na its just math.random didnt have () zzz

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const timeDisplay = document.querySelector("#time");

//choosed card
let choosenCards = [];
let choosenCardsID = [];
const cardMatched = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/Void_TradingCard.jpg");
    card.setAttribute("data-id", i);
    // console.log(card, i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneID = choosenCardsID[0];
  const optionTwoID = choosenCardsID[1];

  // console.log("Check For Match");
  // console.log(cards);

  //brah i never needed this code wtf???
  // if (optionOneID === optionTwoID) {
  //   // cards.optionOneID.setAttribute("src", "images/Void_TradingCard.jpg");
  //   // cards.optionTwoID.setAttribute("src", "images/Void_TradingCard.jpg");
  //   // alert("You clicked on the same card!");
  //   //brah i dont need any of these codes above
  // }

  if (choosenCards[0] === choosenCards[1] && optionOneID !== optionTwoID) {
    // alert("You have found a match!"); //no need
    cards[optionOneID].setAttribute(
      "src",
      "images/Constellations_Synthwave_TradingCard.jpg"
    );
    cards[optionTwoID].setAttribute(
      "src",
      "images/Constellations_Synthwave_TradingCard.jpg"
    );
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoID].removeEventListener("click", flipCard);
    cardMatched.push(choosenCards);

    //testing how the data are stored and how it works
    // console.log(choosenCards);
    // console.log(cardMatched);
    // console.log(cardArray);
  } else {
    cards[optionOneID].setAttribute("src", "images/Void_TradingCard.jpg");
    cards[optionTwoID].setAttribute("src", "images/Void_TradingCard.jpg");
  }

  resultDisplay.textContent = cardMatched.length;

  choosenCards = [];
  choosenCardsID = [];

  if (cardMatched.length === cardArray.length / 2) {
    alert("You Win!");
    window.location.reload();
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  // console.log(cardArray[cardId].name); //testing
  choosenCards.push(cardArray[cardId].name);
  choosenCardsID.push(cardId);
  // console.log("Clicked!!", cardId);
  // console.log(choosenCards);
  // console.log(choosenCardsID);
  this.setAttribute("src", cardArray[cardId].img);
  if (choosenCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function time() {
  var sec = 1;
  timer = setInterval(() => {
    timeDisplay.innerHTML = 30 - sec + "s";
    sec++;
  }, 1000);
}
time();

function timeUp() {
  alert("Time Up! You Lose!!");
  window.location.reload();
}
setTimeout(timeUp, 30000);

// var timeleft = 10;
// var downloadTimer = setInterval(function () {
//   if (timeleft <= 0) {
//     clearInterval(downloadTimer);
//   }
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
// }, 1000);
// <progress value="0" max="10" id="progressBar"></progress>;

// timeDisplay.textContent = "60s";
