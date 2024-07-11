let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-game");
let turnO = true;
let turnX = false;
let head = document.querySelector(".heading");
let win = document.querySelector(".winner");
let draww = document.querySelector(".draw");

start();

function start(){
    head.classList.add('active');
    newGame.classList.add('active');
}

let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = 'X';
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    })
})



function checkWinner(){
    resetBtn.classList.add('active');
    newGame.classList.remove('active');
    let flag = true;
    for(let pattern of winningPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner ",pos1);
                head.classList.remove('active');
                draww.classList.remove('active');
                newGame.classList.add("active");
                resetBtn.classList.remove('active');
                win.innerText = `WINNER  "${pos1}"`;
                win.classList.add('active');
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
                flag = false;
            }
            else if(flag==true){
                let count = 0;
                boxes.forEach((box)=>{
                    if(box.disabled) count+=1;
                })
                console.log(count);
                if(count==9){
                    head.classList.remove('active');
                    resetBtn.classList.remove('active');
                    draww.classList.add('active');
                    win.classList.remove('active');
                    newGame.classList.add('active');
                }
            }
        }
    }
}

resetBtn.addEventListener('click',()=>{
    win.classList.remove('active');
    resetBtn.classList.remove('active');
    newGame.classList.add('active');
    head.classList.add('active');
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
})

newGame.addEventListener('click',()=>{
    win.classList.remove('active');
    draww.classList.remove('active');
    start();
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
})

