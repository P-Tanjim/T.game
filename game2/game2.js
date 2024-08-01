let userScore = 0;
let compScore = 0;

let design = document.querySelector(".choices");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let replay = document.querySelector(".replay");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const replayGame = () => {
    replay.addEventListener("click", () => {
        msg.innerText = "Play your move";
        paper.classList.remove("rotate");
        rock.classList.remove("rotate");
        scissor.classList.remove("rotate");
        paper.classList.remove("hide");
        rock.classList.remove("hide");
        scissor.classList.remove("hide");
        rock.innerHTML = `<img src='rock.webp' alt='rock image'>`;
        paper.innerHTML = `<img src='paper.webp' alt='paper image'>`;
        scissor.innerHTML = `<img src='scissors.webp' alt='scissor image'>`;
        msg.style.backgroundColor = "#081b31";
        replay.classList.add("hide");
    });
}

const showWinner = (userWin) => {
    if(userWin){
        msg.innerText = "You win!";
        userScore++;
        user.innerText = userScore;
        console.log("win");
        msg.style.backgroundColor = "green";
        replay.classList.remove("hide");
    }
    else{
        msg.innerText = "You lose.";
        compScore++;
        comp.innerText = compScore;
        console.log("lose");
        msg.style.backgroundColor = "red";
        replay.classList.remove("hide");
    }
    replayGame();
}
const gameDraw = (compChoice) => {
    if(compChoice === "rock"){
        rock.classList.add("rotate")
        paper.classList.add("hide");
        scissor.classList.add("hide");
    }
    else if(compChoice === "paper"){
        paper.classList.add("rotate")
        rock.classList.add("hide");
        scissor.classList.add("hide");
    }
    else{
        scissor.classList.add("rotate")
        paper.classList.add("hide");
        rock.classList.add("hide");
    }
    replay.classList.remove("hide");
    replayGame();
    msg.innerText = "Match is draw. Try again.";
    msg.style.backgroundColor = "#081b31";
    console.log("draw");
}

const playGame = (userchoice) => {
    console.log("userChoice =", userchoice);
    const compChoice = genCompChoice();
    console.log("compChoice =", compChoice);

    if(userchoice === "rock" && compChoice === "paper"){
        scissor.classList.add("hide");
        rock.classList.add("rotate");
        paper.classList.add("rotate");
    }
    else if(userchoice === "rock" && compChoice === "scissor"){
        paper.classList.add("hide");
        rock.classList.add("rotate");
        scissor.classList.add("rotate");
    }
    else if(userchoice === "paper" && compChoice === "rock"){
        scissor.classList.add("hide");
        paper.classList.add("rotate");
        rock.classList.add("rotate");
        rock.innerHTML = "<img src='paper.webp' alt='paper image'>";
        paper.innerHTML = "<img src='rock.webp' alt='rock image'>";
    }
    else if(userchoice === "paper" && compChoice === "scissor"){
        rock.classList.add("hide");
        scissor.classList.add("rotate");
        paper.classList.add("rotate");
    }
    else if(userchoice === "scissor" && compChoice === "rock"){
        paper.classList.add("hide");
        rock.classList.add("rotate");
        scissor.classList.add("rotate");
        scissor.innerHTML = `<img src="rock.webp" alt="rock image">`;
        rock.innerHTML = `<img src="scissors.webp" alt="scissor image">`;
    }
    else if(userchoice === "scissor" && compChoice === "paper"){
        rock.classList.add("hide");
        scissor.classList.add("rotate");
        paper.classList.add("rotate");
        scissor.innerHTML = `<img src='paper.webp' alt='paper image'>`;
        paper.innerHTML = `<img src="scissors.webp" alt="scissor image">`;       
    }

    if(userchoice === compChoice){
       //draw 
       gameDraw(compChoice);
    }
    else{
        userWin = true;

        if(userchoice === "rock"){
            // scissor, paper
            userWin = compChoice === "scissor" ? true : false;
        }
        else if(userchoice === "paper"){
            // rock, scissor
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            // rock, paper
            userWin  = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});