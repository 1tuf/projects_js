let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".winning");
let message=document.querySelector(".msg");
let newButton=document.querySelector(".newBtn");

let turnO=false; //PlayerX, PlayerO

let winPattren=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(!turnO){
            box.innerText="X";
            turnO=true;
        }
        else{
            box.innerText="O";
            turnO=false;
        }
        box.disabled=true;
        checkWinner();
    });
}

let checkWinner=()=>{
    for(pattern of winPattren){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
               showWinner(pos1);
            }
        }
    }
}

let showWinner=(winner)=>{
    for(box of boxes){
        box.disabled=true;
    }
    if(!winner){
        message.innerText=`Opps!! Restart the game`;
    }

    message.innerText=`Congratulation! Winner is  ${winner}`;
    msgContainer.classList.remove("winning");
    
}
const resetGame=()=>{
    turnO=false;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.classList.add("winning");
}

resetBtn.addEventListener("click",resetGame);

newButton.addEventListener("click",resetGame);

