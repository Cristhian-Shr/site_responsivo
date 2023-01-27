let menu = document.querySelector("nav ul");
let menuBar = document.querySelector("nav .menu-icon");
let iconMenu = document.querySelector("nav .menu-icon img");

menuBar.addEventListener("click", function () {
  if (iconMenu.getAttribute("src") == "imagens/menu.png") {
    iconMenu.setAttribute("src", "imagens/close.png");
  } else {
    iconMenu.setAttribute("src", "imagens/menu.png");
  }

  menu.classList.toggle("active");
});

// efeito digitação

const typing = document.querySelector('[data-js="typing"]');
const message = ["marketing de mídia social"];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = "";
let currentCharacters = "";

const type = () => {
  if (messageIndex === message.length) {
    messageIndex = 0;
  }

  currentMessage = message[messageIndex];
  currentCharacters = currentMessage.slice(0, characterIndex++);
  typing.textContent = currentCharacters;

  if (currentCharacters.length === currentMessage.length) {
    messageIndex++;
    characterIndex = 0;
  }
};

setInterval(type, 200);
