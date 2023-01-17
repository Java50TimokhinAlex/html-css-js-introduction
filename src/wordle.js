//references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
// variables requried for JS logic
const wordsForGuess = ["puppy", "apple", "table", "gold", "silver", "index", "script", "peace", "picture"];
let trials;
let word;
let flGameOver = false;
// functions;
function startGame() {
  word = getWord();
  fillLettersDivs();
  flGameOver = false;
  trials = word.length + 1;
  playAgainElement.style.display = "none";
  gameResultElement.innerHTML = "";
  trialsElement.innerHTML = `remained trials ${trials}`;
}
function getWord () {
  const index = Math.trunc(Math.random() * wordsForGuess.length);
  return wordsForGuess[index];
}
function fillLettersDivs() {
  const arrayWord = Array.from(word);
  guessLettersElement.innerHTML = arrayWord.reduce(function (res ,cur) {
    res = res + '<div class = "letter"></div>'
    return res;
  }, '');
  lettersDivs = document.querySelectorAll(".letter");
}
function onChange() {
  if(flGameOver) {
    alert("Game over, press play-again")
  } else {
    const trialWords = guessInputElement.value;
    trials--;
    trialsElement.innerHTML = `remained trials ${trials}`;
    if (trialWords.length != word.length) {
      alert("wrong number of letters");
    } else {
      coloringWord(trialWords);
    }
  }
 
}
function coloringWord(trialWords) {
  const arWord = Array.from(trialWords);
  arWord.forEach(function(letter, index) {
    lettersDivs[index].innerHTML = letter;
    lettersDivs[index].style.color = getColor(letter, index);
  })
}
function getColor(letter,index){
  let res = "red"
  if (word.includes(letter)) {
    res = word[index] == letter ? "green" : "yellow"
  }
  return res;
}
function finishGame() {
  // TODO
}
// actions
startGame();