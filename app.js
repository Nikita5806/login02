let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBTn = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,5],
    [2,4,6],
    [3,4,5],
    [6,7,8],,
    

];
const resetGame = () => {
    turnO = true;
    enableBoxs();
    msgContainer.classlist.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("box clicked");
        if (turnO){
            box.innerText="O";

            turnO = false;
          }
          else{
            box.innerText="X";
            turnO= true;
          }
          box.disabled = true;

          checkWinner();

    });
});

const disableBoxs = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    };
    const enableBoxs = () => {
        for (let box of boxes) {
            box.innerText= "";
}
;}
const showWinner = (winner) => {
    msg.innerText=   `congratulations,  winner is ${winner}`;
    msgContainer.classlist.remove("hide");
}

const checkWinner =() =>{
    
       for (let pattern of winPatterns){
       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3val= boxes[pattern[2]].innerText;
    

       if(pos1Val != "" && pos2Val != ""  && pos3val != ""){
        if(pos1Val=== pos2Val && pos2Val=== pos3val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
       }
    }
    };
    
    
newGameBTn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);