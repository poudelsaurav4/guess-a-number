"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Answer";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(",guess").value = 12;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter a number!!";

    // to enter a number
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!!";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // manipulation of css:

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "250px";

    //  when player wins
  } else if (guess > secretNumber) {
    // when the guess is high
    if (score > 1) {
      document.querySelector(".message").textContent =
        "guessed number is greater";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you looser!!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    // when the guess is low
    if (score > 1) {
      document.querySelector(".message").textContent =
        "the guessed number is smaller";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you looser!!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// play again
document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
