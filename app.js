const choices = document.querySelectorAll(".choice");
const yourScoreEl = document.getElementById("yourScore");
const computerScoreEl = document.getElementById("computerScore");

// Create result message element
const resultMessage = document.createElement("p");
resultMessage.className = "text-xl font-semibold mt-6";
document.querySelector("section").appendChild(resultMessage);

let yourScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();

  let resultText = "";

  if (userChoice === computerChoice) {
    resultText = `It's a draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    yourScore++;
    yourScoreEl.innerText = yourScore;
    resultText = `🎉 You Win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    computerScoreEl.innerText = computerScore;
    resultText = `😢 You Lose! ${computerChoice} beats ${userChoice}`;
  }

  resultMessage.innerText = resultText;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.querySelector("img").alt;
    playGame(userChoice);
  });
});

