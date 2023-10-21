let gameinfo=document.querySelector(".gameinfo");
let playtab=document.querySelector(".gamefooter");

let boxes=document.querySelectorAll(".box ");

// intilization of game
let currentplayer;
let gamegrid;

let winningpos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

function gameinit(){

    // redecleration of variable is not allowed
    gamegrid=["","","","","","","","",""];
    
    currentplayer="X";

    gameinfo.textContent=`Current Player -${currentplayer}`;
    // remove play button
    playtab.classList.remove("active");

    // initialize the grid
    boxes.forEach((box)=>{
        box.textContent="";
        box.classList.remove("win");
        box.style.pointerEvents="all";
    });


}

gameinit();


function swapturn(){
    if(currentplayer==="X")
    {
        currentplayer="O";
        gameinfo.textContent=`Current Player -${currentplayer}`;

    }
    else{
        currentplayer="X";
        gameinfo.textContent=`Current Player -${currentplayer}`;
    }
}


function checkwin(){

    let answer="";
    let flag=0;
    winningpos.forEach((position)=>{
        // check  for winning condition
        if((gamegrid[position[0]]!="" &&gamegrid[position[0]]!="" &&gamegrid[position[0]]!="" ) && (gamegrid[position[0]]===gamegrid[position[1]]&& gamegrid[position[1]]===gamegrid[position[2]])){
            // check the current player
            if(gamegrid[position[0]]==="X")
            answer="X";
            else
            answer="O";


            boxes.forEach((box)=>{

                box.style.pointerEvents="none";
            });

        // update the green background
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");

       // update the u1

        gameinfo.textContent=`Winner Player -${answer}`;

        playtab.classList.add("active");
        playtab.textContent="New Game";
        flag=1;
        }



    });


    let count=0;
    gamegrid.forEach((game)=>{
        if(game!="" && flag===0)
        count++;

    });
    if(count===9){
        gameinfo.textContent=`Tied!!!`;

        playtab.classList.add("active");
        playtab.textContent="New Game";
    }


  }


  playtab.addEventListener("click",gameinit);

function handleclick(index){
    // check gamegrid[index] is empty or not
    if(gamegrid[index] === ""){
gamegrid[index]=currentplayer;
boxes[index].textContent=currentplayer;
boxes[index].style.pointerEvents = "none";
console.log(index);

// swap the turn
swapturn();
// check if it is win or not
checkwin();
    }

}


boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{

        handleclick(index);
        console.log(index);

    });
   
});