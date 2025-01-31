let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let mssgContainer = document.querySelector(".mssg-container");
let mssg = document.querySelector("#mssg");
let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>
    {
        turn0 = true;
        enableBoxes();
        mssgContainer.classList.add("hide")
    };
boxes.forEach ((box) => {
box.addEventListener("click", () => {
    if (turn0) {
        box.innerText = "O";
        turn0 = false;
    } else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    checkWinner();
});
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    mssg.innerText = `Congo winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for ( let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            
            showWinner(pos1Val);

        }
    
    }
}
};

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
