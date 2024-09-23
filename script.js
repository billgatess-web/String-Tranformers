const userInput = document.getElementsByClassName("input")[0];
const form = document.getElementsByTagName("form")[0];
const submitBtn = document.getElementsByClassName("submit-btn")[0];
let startBtn = document.getElementsByClassName("start-btn")[0];
let allGuesses = document.getElementsByClassName("all-guesses")[0];
let result = document.getElementsByClassName("result")[0];


(function() {
    const allGuessesArray = [];
    let randomNumber = Math.round(Math.random() * 100)
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInputValue = parseInt(userInput.value);
        if(userInputValue < randomNumber){
            result.innerHTML = "Too low!";
        }
        else if(userInputValue > randomNumber){
            result.innerHTML = "Too high!";
        }
        else if (userInputValue === randomNumber){
            result.innerHTML = "You Got It,Congrats!!";
            startBtn.disabled = false;
            submitBtn.disabled = true;
        }
        allGuessesArray.push(userInputValue);
        allGuesses.innerHTML = 'Your Guesses:' + allGuessesArray.join(',');
    
        form.reset();
    });
    startBtn.addEventListener("click", ()=>{
        allGuesses.innerHTML = '';
        result.innerHTML = '';
        startBtn.disabled = true;
        submitBtn.disabled = false;
        randomNumber = Math.round(Math.random() * 100)
    })
}) ()
