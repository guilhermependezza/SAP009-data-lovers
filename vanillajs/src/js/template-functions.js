export function getListTemplate(list, templateFunc) {
  return list.map(templateFunc).join('');
}

export function getCharacterCardTemplate(character) {
  return `
    <article class="card data-id="${character.id}">
      <header>
        <h2 class="card-info">${character.name}</h2>
      </header>
      <section class="card-info">
        <p class="card-info"><strong>Specie:</strong> ${character.specie}</p>
        <p class="card-info"><strong>Gender:</strong> ${character.gender}</p>
        <p class="card-info"><strong>Hair color:</strong> ${character.hair_color}</p>
        <p class="card-info"><strong>Eye color:</strong> ${character.eye_color}</p>
        <p class="card-info"><strong>Age:</strong> ${character.age}</p>
      </section>
      <figure class="card-figure">
        <img class="card-img" src="${character.img}"
          alt="${character.name} photo">
        <figcaption>${character.name}</figcaption>
      </figure>
    </article>
    `;
}

export function getSelectOptionsTemplate(option) {
  return `<option value="${option}">${option}</option>`;
}
