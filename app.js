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
    dispMsg.innerText = "It is a draw";
    dispMsg.style.backgroundColor = "black";
};

const showWinner = (userWin) => {
    if(userWin){
        uScore++;
        userScoreP.innerText = uScore;
        dispMsg.innerText = "You win !";
        dispMsg.style.backgroundColor = "#0EA05E";
    } else {
        cScore++;
        compScoreP.innerText = cScore;
        dispMsg.innerText = "You lose !";
        dispMsg.style.backgroundColor = "#D20103";

    }
}

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
        showWinner(userWin);
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
})