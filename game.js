let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const msgbox=document.querySelector(".msgBox");
const drawGame=()=>{
    console.log("Game was drawn");
};
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You win!");
        userScore++;
        document.querySelector("#userScore").innerText = userScore;
        msg.innerText="You win!";
        msgbox.classList.add("win");
        msgbox.classList.remove("lose");
        msgbox.classList.remove("draw");
    }
    else{
        console.log("You lose!");
        compScore++;
        document.querySelector("#compScore").innerText = compScore;
        msg.innerText="You lose!";
        msgbox.classList.add("lose");
        msgbox.classList.remove("win");
        msgbox.classList.remove("draw");
    }
};
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice==compChoice){
        drawGame(); //draw game
        msg.innerText="Draw";
        msgbox.classList.add("draw");
        msgbox.classList.remove("win");
        msgbox.classList.remove("lose");
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            // scissors, paper are remaining choices for comp
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            //rock,scissors
            userWin=compChoice=="scissors"?false:true;
        }
        else{
            //rock,paper --> comp choice remaining
            //user choice left---> scissors
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);;
    })
});


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const compChoice=genCompChoice();
        console.log(compChoice);
    });
});