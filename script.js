const body = document.querySelector("body");
const message = document.querySelector('#message');

const cell2 = document.querySelector('#cell2');
cell2.addEventListener('click', inputCell2);

const cell3 = document.querySelector('#cell3');
cell3.addEventListener('click', inputCell3);

const cell4 = document.querySelector('#cell4');
cell4.addEventListener('click', inputCell4);

const cell7 = document.querySelector('#cell7');
cell7.addEventListener('click', inputCell7);

const cell8 = document.querySelector('#cell8');
cell8.addEventListener('click', inputCell8);

const cell9 = document.querySelector('#cell9');
cell9.addEventListener('click', inputCell9);

const cell12 = document.querySelector('#cell12');
cell12.addEventListener('click', inputCell12);

const cell13 = document.querySelector('#cell13');
cell13.addEventListener('click', inputCell13);

const cell14 = document.querySelector('#cell14');
cell14.addEventListener('click', inputCell14);

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click',clearSquare);
const grid = document.querySelectorAll('.square');
// console.log(grid);

function clearSquare (){
    for (let i=0; i <grid.length; i++){
        grid[i].innerHTML='';
    }
    message.innerHTML = 'Player 1, click on a square to start';
    player = 1; 
    squareTaken = 0; 
    whoWon = 0;  
}
let squareTaken = 0;
function squaresFull (){
    squareTaken = squareTaken + 1;
}
let player = 1;
function inputCell2(){
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell2.innerHTML === 'X' || cell2.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell2.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
        }else{
        cell2.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
        } squaresFull();
    } winner();    
}
}
function inputCell3(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell3.innerHTML === 'X' || cell3.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell3.innerHTML = 'X';
        player = 0;      
        message.innerHTML = 'Player 2, your turn.'  
    }else{
        cell3.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    } squaresFull();
  } winner();  
}
}
function inputCell4(){
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell4.innerHTML === 'X' || cell4.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell4.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell4.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner();  
}
}
function inputCell7(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell7.innerHTML === 'X' || cell7.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell7.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell7.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner();  
}
}
function inputCell8(){
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell8.innerHTML === 'X' || cell8.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell8.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell8.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner();  
}
}
function inputCell9(){
    if(whoWon !== 0){
        finalMessage();
    }else{    
    if(cell9.innerHTML === 'X' || cell9.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell9.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'        
    }else{
        cell9.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner();  
 }
}
function inputCell12(){
    if(whoWon !== 0){
        finalMessage();
    }else{    
    if(cell12.innerHTML === 'X' || cell12.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell12.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell12.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner(); 
 }
}
function inputCell13(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell13.innerHTML === 'X' || cell13.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell13.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell13.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner();  
 }
}
function inputCell14(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
    if(cell14.innerHTML === 'X' || cell14.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
    }else{
    if(player === 1){
        cell14.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell14.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }squaresFull();
  } winner(); 
 }
}
let whoWon = 0;
function winner() {
    if (whoWon === 0){    
        if ((cell2.innerHTML === 'X' && 
        cell3.innerHTML === 'X' && 
        cell4.innerHTML === 'X') 
        || 
        (cell7.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell9.innerHTML === 'X') 
        || 
        (cell12.innerHTML === 'X' && 
        cell13.innerHTML === 'X' && 
        cell14.innerHTML === 'X') 
        ||
        (cell2.innerHTML === 'X' && 
        cell7.innerHTML === 'X' && 
        cell12.innerHTML === 'X') 
        ||
        (cell3.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell13.innerHTML === 'X') 
        ||
        (cell4.innerHTML === 'X' && 
        cell9.innerHTML === 'X' && 
        cell14.innerHTML === 'X') 
        ||
        (cell2.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell14.innerHTML === 'X') 
        ||
        (cell4.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell12.innerHTML === 'X'))
        {
        message.innerHTML = 'Player 1 wins!';
        whoWon = 1;        
    }else if((cell2.innerHTML === 'O' && 
        cell3.innerHTML === 'O' && 
        cell4.innerHTML === 'O') 
        ||
        (cell7.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell9.innerHTML === 'O') 
        ||
        (cell12.innerHTML === 'O' && 
        cell13.innerHTML === 'O' && 
        cell14.innerHTML === 'O') 
        ||
        (cell2.innerHTML === 'O' && 
        cell7.innerHTML === 'O' && 
        cell12.innerHTML === 'O') 
        ||
        (cell3.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell13.innerHTML === 'O')
        ||
        (cell4.innerHTML === 'O' && 
        cell9.innerHTML === 'O' && 
        cell14.innerHTML === 'O')
        ||
        (cell2.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell14.innerHTML === 'O')
        ||
        (cell4.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell12.innerHTML === 'O'))
        {    
        message.innerHTML = 'Player 2 wins!';
        whoWon = 2;
        }else if((squareTaken === 9) && (whoWon === 0)) {
        message.innerHTML = 'Tie! Want to play again?';           
        }
    }console.log(whoWon);
} 
function finalMessage(){
    if(whoWon === 1){
        message.innerHTML = 'Player 1 won! Want to play again?';
    }else{ if(whoWon === 2){
        message.innerHTML = 'Player 2 won! Want to play again?';
        }
    }
}

// body.onclick = e => {
//    return e.target.id;  // to get the element
// //     // console.log(e.target.class);  // to get the element tag name alone




