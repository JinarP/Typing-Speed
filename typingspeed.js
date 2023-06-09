let text = chooseWord();
let textCopy = text;
let startGame = false;
let finishGame = false;
let time  = 0;
let letterNumber = 0;
let interval;
addEventListener('keypress', checkGame);

function timer() {
    time += 10;
    let minutes = Math.floor(time / 1000 / 60);
    let second = Math.floor(time / 1000) % 60;
    let milisecond = Math.floor (time  % 1000 / 60);
    document.getElementById("timer").innerText = minutes + ":" +
    second + ":" + milisecond;
}

function start() {
    if (finishGame === true) {
        return;
    }
    document.getElementById("unCheckText").innerText = text;
    interval = setInterval(timer, 10);
}

let inputText ='';
function checkGame() {
    let firstLength = inputText.length;
    inputText = document.getElementById("Typing").value;
    let currentLength = inputText.length;

    if (firstLength === currentLength && currentLength != 0) {
        return;
    }
    if (startGame === true) {
       checkCorrectLetter(inputText);
    }
    startGame = true;
}

function chooseWord() {
    let words = ['Many participants threw their economic, industrial, and scientific capabilities behind this total war, blurring the distinction between civilian and military resources',
    'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript', 
    'North Atlantic Alliance, is an intergovernmental military alliance between 31 member states 29 European and two North American', 
    'The university rose to dominate the town. A heavily ecclesiastical town, Oxford was greatly affected by the changes of the English Reformation, emerging as the seat of a bishopric and a full-fledged city.', 
    'Three successful seasons followed, with Messi winning four consecutive Ballons dOr, making him the first player to win the award four times.'];
    let rdm = generateNumber(0, words.length);
    return words[rdm];
}

function generateNumber (minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

let correctLetter = 0;
let wrongLetter = 0;
function checkCorrectLetter (letter) {
    textCopy = textCopy.substring(1);
    document.getElementById("unCheckText").innerText = "";
    if (finishGame === true) {
        return;
    }
    let i = letter.length - 1;
    if (letter[i] == text[letterNumber]) {
        document.getElementById("checkText").innerHTML += `<span style="color: green">${letter[i]}</span>`;
        ++correctLetter;
    } else {
        document.getElementById("checkText").innerHTML += `<span style="color: red">${letter[i]}</span>`;
        ++wrongLetter;
    }
    document.getElementById("unCheckText").innerText = textCopy;
    ++letterNumber;
    updateStatistic();
    
}

function updateStatistic() {
    document.getElementById("timePerLetter").innerHTML = "Medium time: " + ((Math.floor(time / 1000) % 60) / (wrongLetter + correctLetter)).toFixed(2) + " sec/letter";
    document.getElementById("correctLetter").innerHTML = "Letter write correct: " + correctLetter;
    document.getElementById("wrongLetter").innerHTML = "Wrong letter:" + wrongLetter;
    if (letterNumber === text.length - 1) {
        endGame();
    }
}

function endGame () {
    document.getElementById("correctText").innerText = text;
    finishGame = true;
    clearInterval(interval);
}

function newGame () {
    window.location.reload();
}