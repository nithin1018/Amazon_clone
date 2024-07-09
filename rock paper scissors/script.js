let score =  JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0

};

updateScore();
/*   if(!score){
score = {
    wins: 0,
    loses: 0,
    ties: 0

};
}   */ 
let computerMove;
let result;

let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    if(!isAutoPlaying){
         intervalId = setInterval(function() {
            const playerMove = pickComputerMove();
            playerGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;

    }
}


//----this is the easier code for the onclick attribute----

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
    playerGame('Rock')
});
document.querySelector('.js-paper-button')
.addEventListener('click', () => {
    playerGame('Paper')
});
document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
    playerGame('Scissors')
});

document.body.addEventListener('keydown' ,(event) => {
     if(event.key === 'r'){
        playerGame('Rock');
     }else if(event.key === 'p'){
        playerGame('Paper');
     }else if(event.key === 's'){
        playerGame('Scissors');
     }
});

function playerGame(playerMove){
const computerMove = pickComputerMove();
if(playerMove === 'Scissors'){
if(computerMove==='Rock'){
    result='you lose';
    }else if(computerMove==='Scissors'){
        result='tie' ;
    }else if(computerMove==='Paper'){
        result='you win';  
    }
}else if(playerMove === 'Paper'){
if(computerMove==='Rock'){
result = 'you win';
}else if(computerMove==='Scissors'){
result = 'you lose';
}else if(computerMove==='Paper'){
result = 'tie';
}
} else if(playerMove === 'Rock'){
         
if(computerMove==='Rock'){
result = 'tie';
}else if(computerMove==='Scissors'){
result = 'you win';
}else if(computerMove==='Paper'){
result ='you lose';
}
    }
    if(result === 'you win'){
        score.wins++;
    }else if(result === 'you lose'){
        score.loses++;
    }else if(result === 'tie'){
        score.ties++;
    }
       localStorage.setItem('score',JSON.stringify(score));

     updateScore();

     document.querySelector('.js-result').innerHTML = `${result}`;

                document.querySelector('.js-moves').innerHTML = `You
        <img src="${playerMove}-emoji.png" class="move-icon" alt="rock">
        <img src="${computerMove}-emoji.png" class="move-icon" alt=scissors"">
        Computer
        </p>`;
            }


function updateScore(){
       document.querySelector('.js-score').innerHTML =    `Wins : ${score.wins}  Loses : ${score.loses}    Tie : ${score.ties}`

}


function pickComputerMove(){
    let computerMove;
    const randomNumber = Math.random();
if(randomNumber>=0 && randomNumber<(1/3)){
computerMove='Rock';
}else if(randomNumber>=(1/3) && randomNumber<(2/3)){
computerMove='Scissors';
}else if(randomNumber>=(2/3) && randomNumber<1){
computerMove='Paper';
}
return computerMove;

}