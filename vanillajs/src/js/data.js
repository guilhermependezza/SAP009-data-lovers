import ghibli from "../data/ghibli/ghibli.js"

export function initBaseComputedData() {
  const storedCharacters = localStorage.getItem('characters')
  if (!storedCharacters) {
    storeCharacters()
  }

  try {
    JSON.parse(storedCharacters);
  } catch {
    storeCharacters()
  }
}

export function getCharacters() {
  return JSON.parse(localStorage.getItem('characters'))
}

function storeCharacters() {
  const characters = ghibli.films
    .map(film => film.people)
    .flat(1)
  localStorage.setItem('characters', JSON.stringify(characters));
}

