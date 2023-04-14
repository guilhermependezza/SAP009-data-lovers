import { initBaseComputedData, getCharacters } from './data.js';
import { getCharacterCardTemplate } from './template-functions.js'

let charactersContainer;

window.addEventListener("load", () => {
  initBaseComputedData();
  init();
});

function init() {
  charactersContainer = document.querySelector('.cardlist');
  printCharacters(getCharacters())
}

function printCharacters(characters) {
  const template = characters
    .map(getCharacterCardTemplate).join('')
  charactersContainer.innerHTML = template;
}

