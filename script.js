const adjectives = ["Electric", "Powerful", "Majestic", "Rotten", "Fiery", "Cold"];

 const nouns = ["Chicago", "LA", "Feline", "Taco", "Alien", "Crows"];

function getAdjective() {

 // TODO: return a random adjective from the adjectives array
 const index = Math.floor(Math.random() * adjectives.length);
  return adjectives[index];
 }

 function getNoun() {

 // TODO: return a random noun from the nouns array
const index = Math.floor(Math.random() * nouns.length);
  return nouns[index];
 }

 function generateBandName() {

 // TODO: use getAdjective() and getNoun() to build a band name
const adjective = getAdjective();
  const noun = getNoun();
  const bandName = `The ${adjective} ${noun}`;
 // Format: "The Adjective Noun"

 // Then update the DOM to show the band name inside #band-name

 }
const bandNameElement = document.getElementById("band-name");
  bandNameElement.textContent = bandName;
}

// Hook up the button
document.getElementById("generate-btn").addEventListener("click", generateBandName);