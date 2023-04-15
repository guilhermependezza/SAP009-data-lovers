import { initBaseComputedData, getCharacters, filterCharactersByKeyValue, getCharacterSelectOptions } from './data.js';
import { getListTemplate, getCharacterCardTemplate, getSelectOptionsTemplate } from './template-functions.js';

const UNSELECTED_VALUE = 'Select';

(function () {
  let charactersContainer;
  let filterButton;
  let filterClearButton;
  let genderSelect;
  let speciesSelect;
  let hairSelect;
  let eyeSelect;
  let filters;

  window.addEventListener("load", () => {
    initBaseComputedData();
    init();
  });

  function init() {
    queryDOMElements();
    filterButton.addEventListener('click', doFilter);
    filterClearButton.addEventListener('click', filterClear);
    createSelectOptions();
    printCharacters(getCharacters());
  }

  function createSelectOptions() {
    const characterOptions = getCharacterSelectOptions();
    filters.forEach(f => {
      const selectOptions = [UNSELECTED_VALUE, ...characterOptions[f.name]];
      f.innerHTML = getListTemplate(selectOptions, getSelectOptionsTemplate);
    });
  }

  function printCharacters(characters) {
    charactersContainer.innerHTML = getListTemplate(characters, getCharacterCardTemplate);
  }

  function doFilter() {
    const filteredCharacters = filters.reduce((acc, { value, dataset: { filterKey } }) => {
      return value === UNSELECTED_VALUE ? acc : filterCharactersByKeyValue(acc, filterKey, value);
    }, getCharacters());
    printCharacters(filteredCharacters);
  }
  function filterClear() {
    filters.forEach(f => f.value = UNSELECTED_VALUE);
    printCharacters(getCharacters());
  }

  function queryDOMElements() {
    charactersContainer = document.querySelector('.cardlist');
    filterButton = document.querySelector('.filter');
    filterClearButton = document.querySelector('.filter-clear');
    genderSelect = document.querySelector('#gender-select');
    speciesSelect = document.querySelector('#species-select');
    hairSelect = document.querySelector('#hair-select');
    eyeSelect = document.querySelector('#eye-select');

    filters = [genderSelect, speciesSelect, hairSelect, eyeSelect];
  }
})();

