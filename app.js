let boxes =document.querySelectorAll(".box") // to access the boxes
// since multiple boxes  so we will access them with class name 

let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
       msgContainer.classList.add("hide"); // after reset clicked, hide will be added so that it can hide winner option

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log ("box was clicked");
        if(turnO){
            box.innerText = "O"; // after button is click if first is turn O
            turnO = false; // O is print , and after that it since its now X turn 
            // therefore turn O is given false.
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

       checkWinner();
       
    });
});
  const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
  }
  const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
  }
const showWinner = (winner) => {
    msg.innerText = `Congratualtions, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); // after winner is made mssg will display showing Winner
    disableBoxes(); // jaise hi winner declare hoga , can't press any more buttons
}
 const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame )
 