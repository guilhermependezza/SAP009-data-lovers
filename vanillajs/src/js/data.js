import ghibli from "../data/ghibli/ghibli.js";

const CHARACTER_SELECT_OPTIONS_KEY = 'characterSelectOptions';
const CHARACTER_KEY = 'characters';

export function initBaseComputedData() {
  const storedCharacters = localStorage.getItem(CHARACTER_KEY);
  if (!storedCharacters) {
    storeCharacters();
  }

  try {
    JSON.parse(storedCharacters);
  } catch (_) {
    storeCharacters();
  }

  const storedCharacterOptions = localStorage.getItem(CHARACTER_SELECT_OPTIONS_KEY);
  if (!storedCharacterOptions) {
    storeCharacterSelectOptions();
  }

  try {
    JSON.parse(getCharacterSelectOptions());
  } catch (_) {
    storeCharacterSelectOptions();
  }
}

export function getCharacters() {
  return JSON.parse(localStorage.getItem(CHARACTER_KEY));
}

export function filterCharactersByKeyValue(characters, key, value) {
  return characters.filter(c => c[key] === value);
}

function storeCharacters() {
  const characters = ghibli.films
    .map(film => film.people)
    .flat(1);
  localStorage.setItem(CHARACTER_KEY, JSON.stringify(characters));
}

function storeCharacterSelectOptions() {
  const options = {
    hair: {},
    eye: {},
    species: {},
    gender: {}
  };
  getCharacters().forEach(c => {
    options.hair[c.hair_color] = c.hair_color;
    options.eye[c.eye_color] = c.eye_color;
    options.species[c.specie] = c.specie;
    options.gender[c.gender] = c.gender;
  });
  options.hair = Object.keys(options.hair).sort();
  options.eye = Object.keys(options.eye).sort();
  options.gender = Object.keys(options.gender).sort();
  options.species = Object.keys(options.species).sort();
  localStorage.setItem(CHARACTER_SELECT_OPTIONS_KEY, JSON.stringify(options));
}

export function getCharacterSelectOptions() {
  return JSON.parse(localStorage.getItem(CHARACTER_SELECT_OPTIONS_KEY));
}


