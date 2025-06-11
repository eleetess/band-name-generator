const adjectives = ["Electric", "Powerful", "Majestic", "Rotten", "Fiery", "Cold","Dark"];
const nouns = ["LA", "Dice", "House", "Lips", "Tongue", "Crows","Willow"];

function getAdjective() {
  const index = Math.floor(Math.random() * adjectives.length);
  return adjectives[index];
}

function getNoun() {
  const index = Math.floor(Math.random() * nouns.length);
  return nouns[index];
}

function generateBandName() {
  const adjective = getAdjective();
  const noun = getNoun();
  const bandName = `The ${adjective} ${noun}`;

  const bandNameElement = document.getElementById("band-name");
  bandNameElement.textContent = bandName;
}

document.getElementById("generate-btn").addEventListener("click", generateBandName);