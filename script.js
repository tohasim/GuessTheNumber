"use strict";

let tal;

window.addEventListener("load", start);

function start(){
    tal = generateRandomNumber();
    document.querySelector("#guessingForm").addEventListener("submit", receiveGuess)
}


function generateRandomNumber(){
    return 42;
}

function receiveGuess(event){
    event.preventDefault();
    const form = event.target;
    const value = form.guess.valueAsNumber
    checkGuess(value)    
}

function checkGuess(guess){
    if(guess === tal){
        guessIsCorrect(guess)
    } else if(guess<tal){
        guessIsTooLow(guess);
    } else{
        guessIsTooHigh(guess);
    }
}

function guessIsCorrect(guess){
    const html = `<li>Du gæssede ${guess} - det var korrekt :))))</li>`
    const list = document.getElementById("guessList")
    list.insertAdjacentHTML("beforeend", html)    
    
}
function guessIsTooLow(guess){
    const html = `<li>Du gæssede ${guess} - det var for lavt</li>`
    const list = document.getElementById("guessList")
    list.insertAdjacentHTML("beforeend", html)    

    
}
function guessIsTooHigh(guess){
    const html = `<li>Du gæssede ${guess} - det var for højt</li>`
    const list = document.getElementById("guessList")
    list.insertAdjacentHTML("beforeend", html)    
}