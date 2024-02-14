function haideId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showId(getShowId) {
  const show = document.getElementById(getShowId);
  show.classList.remove("hidden");
}

function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function rendomAlpabat() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabats = alphabetString.split("");
  // console.log(alphabats);
  //   index number
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabat = alphabats[index];
  console.log(index, alphabat);
  return alphabat;
}
