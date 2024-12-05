// let div = document.querySelector("div"); 
// let ul = document.querySelector("ul"); 
// let lis = document.querySelectorAll("li"); 

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }
//todo app
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let items = document.createElement("li");
//     items.innerText = inp.value;

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     items.appendChild(delbtn);
    
//     ul.appendChild(items);
//     inp.value = "";
    
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted!!");
//     }
// })

//simaon game

let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game is started");
        started = true;
        
        levelUp();
    }
   
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(randColor);
    gameFlash(randBtn);

}
function checkAns(idx){
    // console.log("current level:", level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br> Press any key to start!!!!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}