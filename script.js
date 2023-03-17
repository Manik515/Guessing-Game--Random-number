// //Initializing
// let totalAttempts = 5;
// let attempts = 0;
// let totalWons = 0;
// let totalLost = 0;

// //Finding and selecting elements
// const form = document.querySelector("form");
// const gueesNumber = form.querySelector("#gueesingNumber");
// const checkButton = form.querySelector("#check");

// const cardBody = document.querySelector(".card-body");
// const  resultText = cardBody.querySelector(".resultText")
// const  remaniningAttempts = cardBody.querySelector(".remainingAttempts")

// // create element for remaining attempts, win and lost
// const  lostWonMessage = document.createElement("p")


// form.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     // console.log(gueesingNumber.value);
//     checkResult(gueesNumber.value);
// });

// function checkResult(gN){
//     // console.log(v)
//     const randomNumber = getRandomNumber(5)
//     // console.log(randomNumber)
//     if(gN == randomNumber){
//         resultText.innerHTML = `You have won!`;
//         totalWons++;
//     }else{
//         resultText.innerHTML = `You have lost! Random number was ${randomNumber}.`
//         totalLost++;
//     }
//     lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLost}`
//     lostWonMessage.classList.add("large-text")
//     cardBody.appendChild(lostWonMessage)
// }

// // function getRandomNumber(limit){
// //     return Math.floor(Math.random() * limit) +1;
// // }
// const getRandomNumber = (limit) => Math.floor(Math.random() * limit) +1;



let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLost = 0;

const form = document.querySelector("form");
const guessNum = form.querySelector("#gueesingNumber");
const  checkButton = form.querySelector("#checkResult");

const cardBody = document.querySelector(".card-body");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

const wonLostMessege = document.createElement("p")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    // console.log(guessNum.value);
    getResult(guessNum.value)
})

const getResult = (gNum) =>{
    const randN = randomNumber(5);

    if(gNum == randN){
        resultText.innerHTML = `You have won!`
        totalWons++;
    }else{
        resultText.innerHTML = `You lost, The random number was ${randN}`
        totalLost++;
    }
    wonLostMessege.innerHTML = `Won: ${totalWons}, Lost: ${totalLost}`;
    wonLostMessege.classList.add("large-text");
    cardBody.appendChild(wonLostMessege);
};

const randomNumber = (limit) => Math.floor(Math.random() * limit) +1;
