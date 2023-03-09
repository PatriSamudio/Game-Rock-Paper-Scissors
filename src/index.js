import { resetBorder } from "./modules/resetBorder.js";

const OPCIONES = ["rock", "paper", "scissors"];
let playerSelection;
let cpuSelection;

const [rockButton, paperButton, scissorsButton] = o button
document.querySelectorAll(".player > button");
const cpuImage = document.querySelector(".cpu img"); 
const result = document.querySelector(".result");

const onButtonPressed = (index, button) => {
  resetBorder();
  playerSelection = choosePlayerOption(index);
  button.classList.add("selected");
  cpuSelection = chooseCPUOption();
  checkWinner();
}
rockButton.addEventListener("click", () => onButtonPressed(0, rockButton));
paperButton.addEventListener("click", () => onButtonPressed(1, paperButton));
scissorsButton.addEventListener("click", () => onButtonPressed(2, scissorsButton););

const choosePlayerOption = (index) => OPCIONES[index];

const chooseCPUOption = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const imageName = OPCIONES[randomIndex];
  cpuImage.src = "images/" + imageName + ".png";
  return OPCIONES[randomIndex];
}

const checkWinner = () => {
  if (cpuSelection === playerSelection) {
    result.textContent = "Has empatado";
  } else if (playerSelection === "rock") {
    if (cpuSelection === "paper") {
      result.textContent = "Perdiste :(";
    } else if (cpuSelection === "scissors") {
      result.textContent = "Ganaste :)";
    }
  } else if (playerSelection === "paper") {
    if (cpuSelection === "rock") {
      result.textContent = "Ganaste :)";
    } else if (cpuSelection === "scissors") {
      result.textContent = "Perdiste :(";
    }
  } else if (playerSelection === "scissors") {
    if (cpuSelection === "rock") {
      result.textContent = "Perdiste :(";
    } else if (cpuSelection === "paper") {
      result.textContent = "Ganaste :)";
    }
  }
} 

