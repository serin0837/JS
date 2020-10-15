//compare hand
//update score

const game = ()=>{
    let playerScore =0;
    let computerScore =0;
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
    const playMach=()=>{
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
                const computerChoise =  computerOptions[computerNumber]
                console.log(computerChoise)
            }
        )
        })
    }

    startGame();
    playMach();
}

game();