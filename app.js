let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".choice");
const dispMsg = document.querySelector("#msg");
const userScoreP = document.querySelector("#userScore");
const compScoreP = document.querySelector("#compScore");
const resetButton = document.querySelector("#resetB");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rIndex = Math.floor(Math.random() * options.length);
    return options[rIndex];
};

const drawGame = () => {
    dispMsg.innerText = "Err...it is a draw";
    dispMsg.style.backgroundColor = "#0D1B1E";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        uScore++;
        userScoreP.innerText = uScore;
        dispMsg.innerHTML = `Your choice is ${userChoice} & Computer choice is ${compChoice}<br>You WIN`;
        dispMsg.style.backgroundColor = "rgba(14, 160, 94, 0.7)";
    } else {
        cScore++;
        compScoreP.innerText = cScore;
        dispMsg.innerHTML =  `Your choice is ${userChoice} & Computer choice is ${compChoice}<br>You LOST`;
        dispMsg.style.backgroundColor = "rgba(210, 1, 3, 0.85)";

    }
};

const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor and paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock and scissor
            userWin = compChoice === "rock" ? true : false;

        } else {
            //rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetB.addEventListener("click", () =>{
    uScore = 0;
    cScore = 0;
    userScoreP.innerText = uScore;
    compScoreP.innerText = cScore;
    dispMsg.innerText = "Let's play!";
    dispMsg.style.backgroundColor = "black";
});