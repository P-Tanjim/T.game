let buttones = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-button");
let win = document.querySelector("h1");
let startBtn = document.querySelector("#start-box");
let newBtn = document.querySelector(".new-btn")
let move = "o";

let winPatt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    enableBtn();
    move = "o";
    startBtn.classList.add("hide");
    win.classList.remove("margin");
    win.innerText = "Tic-Tac-Toe";
}

const disableBtn = () => {
    for(let butt of buttones){
        butt.disabled = true;
    }
}
const enableBtn = () => {
    for(let butt of buttones){
        butt.disabled = false;
        butt.innerText = "";
    }
}
const winner = () => {
    for(let patt of winPatt){
        let patt1 = buttones[patt[0]].innerText;
        let patt2 = buttones[patt[1]].innerText;
        let patt3 = buttones[patt[2]].innerText;
        if(patt1 !== "" && patt2 !== "" && patt3 !== ""){
            if(patt1 === patt2 && patt2 === patt3){
                win.innerText = `Player ${patt1} is win`;
                win.classList.add("margin");
                startBtn.classList.remove("hide");
                disableBtn();
            }
        }
    }
} 

buttones.forEach((button) =>{
    button.addEventListener("click", () => {
      if( move === "o"){
        move = "x";
        button.classList.add("colorX");
        button.classList.remove("colorO");
        button.innerText = "X";
      }
      else{
        move = "o";
        button.classList.add("colorO");
        button.classList.remove("colorX");
        button.innerText = "O";
      }
      button.disabled = true;
      winner();
    });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);