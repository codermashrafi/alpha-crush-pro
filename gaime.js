// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   play ground
//   const playSection = document.getElementById("playGround");
//   playSection.classList.remove("hidden");
// }
// kye pras
function handlekyebordbutton(event) {
  const plyerPrast = event.key;
  console.log("player prased", plyerPrast);
  // get the expeced to prassed
  const carrentAlphabat = document.getElementById("carruent-alphaber");
  const carrentAl = carrentAlphabat.innerText;
  const carrentText = carrentAl.toLowerCase();
  console.log(plyerPrast, carrentText);
  // chaked
  if (plyerPrast === carrentText) {
    console.log("you gat apoint");

    const carretScoreElement = document.getElementById("carretScore");
    const carrentTextElement = carretScoreElement.innerText;
    const carrentScore = parseInt(carrentTextElement);
    console.log(carrentScore);
    const newScore = carrentScore + 1;
    carretScoreElement.innerText = newScore;
    console.log(carrentTextElement);
    console.log("you are prssed right", carrentText);
    removeBackgroundColor(carrentText);
    contnueGame();
  } else {
    ("you missed.you lost a life");
    const carrentLifeElement = document.getElementById("carrentLife");
    const carrentLifeText = carrentLifeElement.innerText;
    const carrentLife = parseInt(carrentLifeText);
    const newLIfe = carrentLife - 1;
    carrentLifeElement.innerText = newLIfe;
  }
}
document.addEventListener("keyup", handlekyebordbutton);

function contnueGame() {
  const alphabat = rendomAlpabat();
  // console.log("your random alphabat", alphabat);
  //   inner text
  const carrentAlphabat = document.getElementById("carruent-alphaber");
  carrentAlphabat.innerText = alphabat;
  addBackgroundColorById(alphabat);
}
function play() {
  haideId("home-screen");
  showId("playGround");
  contnueGame();
}
