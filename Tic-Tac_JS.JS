let boxes=document.querySelectorAll(".box");  //acces box
let resetBtn=document.querySelector("#reset-btn");//acces reset button
let msg_container=document.querySelector(".msg-container");
let newGameBtn=document.querySelector("#new-game-btn");
let winnerAcc=document.querySelector("#winner");

let turn0=true;

const winPatterns=[ //create game position
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
     turn0=true;
     enableBoxes();//called enable function
     msg_container.classList.add("hide");//hume msg_container ko hide karna padega jaise hee game reset hoga
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){ //if true hai 
            box.innerText="O";//to O print print kar do
            turn0=false; //and fir alternate karne ke liye false kar do
        }
        else{
            box.innerText="X";//barna text X kar do 
            turn0=true;//and fir alternate ke true kar do
        }
        box.disabled=true; //used for ek bar click karne ke baad dobara change na ho
        
        checkWinner();//call function
    });
});
const disableBoxes=()=>{ //this is created for box taki winner hone ke baad box click na ho
    for(box of boxes){
        box.disabled=true;//isiliye yah disabled true kiya
    }
};

const enableBoxes=()=>{ //this is enable function
    for(box of boxes){
        box.disabled=false;//yah isliye use kiya hai taki jab new game start ho all boxes enable ho jayen
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    winnerAcc.innerText=`Congratulations,winner is ${winner}`;//isko show karne ke liye 
    msg_container.classList.remove("hide");//yaha se hide ko remove kiya 
    disableBoxes();//called disable function

};
const checkWinner=()=>{
    for(let pattern of winPatterns){ //for of loop used for traverse
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText; 
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){//pos1,pos2,pos3 if teeno position blank hain
            if(pos1Val===pos2Val&&pos2Val===pos3Val){//and pos1 pos2 ke and pos2 pos3 ke == hai
                showWinner(pos1Val);//called showWinner function
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);//jaise hee "newGameBtn" ko click kiya karenge vaise hee "resetGame" function triggred ho jayega
resetBtn.addEventListener("click",resetGame);//yaha bhi jaise hee "resetBtn" ko click kiya karenge vaise hee "resetGame" function triggred ho jayega