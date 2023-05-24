let text = chooseWord();
let typeText;
let time  = 0;
let interval;

function timer() {
    time += 10;
    let minutes = Math.floor(time / 1000 / 60);
    let second = Math.floor(time / 1000) % 60;
    let milisecond = Math.floor (time  % 1000 / 60);
    document.getElementById("timer").innerText = minutes + ":" +
    second + ":" + milisecond;
}

function start() {
    document.getElementById("textGrid").innerText = text;
    interval = setInterval(timer, 10);
}

function checkGame() {
    typeText = document.getElementById("Typing").value;
    checkCorrectLetter(typeText);
    clearInterval(interval);
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

function checkCorrectLetter (writeText) {
    let correctLetter = 0;
    let wrongLetter = 0;
    document.getElementById("textGrid").innerHTML +='<br>'
    for (let i = 0; i < writeText.length; ++i) {
        if (writeText[i] == text[i]) {
            document.getElementById("textGrid").innerHTML += `<span style="color: green">${writeText[i]}</span>`;
            ++correctLetter;
        } else {
            document.getElementById("textGrid").innerHTML += `<span style="color: red">${writeText[i]}</span>`;
            ++wrongLetter;
        }
    }
    document.getElementById("timePerLetter").innerHTML += ((Math.floor(time / 1000) % 60) / writeText.length).toFixed(2) + " sec/letter";
    document.getElementById("correctLetter").innerHTML += correctLetter;
    document.getElementById("wrongLetter").innerHTML += wrongLetter;
}