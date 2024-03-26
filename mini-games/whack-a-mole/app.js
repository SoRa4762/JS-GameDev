const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startBtn = document.querySelector(".start-btn");

let result = 0;
let hitPosition;
let currentTime = 30;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");
  //   console.log(randomSquare);

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  let timerID = null;
  timerID = setInterval(randomSquare, 400);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    // clearInterval();
    alert("Time Up! Your Final Score is: " + result);
    window.location.reload();
  }
}

// let countDownTimerID = setInterval(countDown, 1000);
startBtn.addEventListener("click", moveMole);
startBtn.addEventListener("click", function () {
  setInterval(countDown, 1000);
});
// startBtn.addEventListener("click", countDownTImerID);
