var heading = document.getElementsByTagName("h1")[0];

var dice1 = document.getElementsByClassName("img1")[0];
var dice2 = document.getElementsByClassName("img2")[0];

function rollDice() {
  var r1 = Math.floor(Math.random() * 6) + 1;
  var r2 = Math.floor(Math.random() * 6) + 1;

  console.log(r1, r2);

  const audio = new Audio("./roll.mp3");
  audio.play();

  heading.classList.add(`animate__jello`);
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  setTimeout(() => {
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");
    heading.classList.remove(`animate__jello`);
  }, 500);

  dice1.setAttribute("src", `./images/dice${r1}.png`);
  dice2.setAttribute("src", `./images/dice${r2}.png`);

  setTimeout(() => {
    if (r1 > r2) {
      heading.innerText = "Player 1 Wins ✅";
    } else if (r2 > r1) {
      heading.innerText = "Player 2 Wins ✅";
    } else {
      heading.innerText = "Draw ❕";
    }
  }, 600);
}

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    rollDice();
  }
});
