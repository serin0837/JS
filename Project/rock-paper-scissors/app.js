//compare hand
//update score

const game = ()=>{
    let pScore =0;
    let cScore =0;
    //fade in and out
    const startGame=()=>{
        const playBtn = document.querySelector(".intro button")
        const introScreen = document.querySelector(".intro")
        const match= document.querySelector(".match")
        
        playBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })
    }

    //play match
    const playMatch=()=>{
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")

        //computer Options
        const computerOptions = ["rock","paper","scissors"];
        options.forEach(option=>{//if there is one parameter can get rid of parenthesis
            option.addEventListener("click",function(){
                console.log(this)
                //this is going to be whatever we clicked
                //arrow function its not going to bind to same this 
                //its going to be window //why????????????????
                
                //generate random nums
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice =  computerOptions[computerNumber]
             

                //update images//omg
                playerHand.src=`./assets/${this.textContent}.png`
                computerHand.src=`./assets/${computerChoice}.png`

                compareHands(this.textContent,computerChoice)
            }
        )
        })
    }
    //update Score
    const updateScore =()=>{
        const playerScore =document.querySelector(".player-score p")
        const computerScore =document.querySelector(".computer-score p")

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }
    const compareHands = (playerChoice,computerChoice)=>{
        //update text
        const winner = document.querySelector(".winner")
        //Check for tie
        if(playerChoice===computerChoice){
            winner.textContent="It is a tie"
            return
        }
        //check for rock
        if(playerChoice==="rock"){
            if(computerChoice==="scissors"){
                winner.textContent="Player Wins"
                pScore++;
                updateScore()
                return;
            }else{
                winner.textContent="Computer Wins"
                cScore++;
                updateScore()
                return;
            }
        }
        //check for paper
        if(playerChoice==="paper"){
            if(computerChoice==="scissors"){
                winner.textContent="Computer Wins"
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent="Player Wins"
                pScore++
                updateScore()
                return;
            }
        }
        if(playerChoice==="scissors"){
            if(computerChoice==="rock"){
                winner.textContent="Computer Wins"
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent="Player Wins"
                pScore++
                updateScore()
                return;
            }
        }

    }

    startGame();
    playMatch();
}

game();