//place the marks
const X_CLASS ="x"
const CIRCLE_CLASS= "circle"
const board = document.getElementById("board")

//7. create winning combination array
const WINNING_COMBINATION=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
//10. 
const winningMessageTextElement = document.querySelector("[data-winning-message-text]")
const winningMessageElement = document.getElementById("winningMessage")
const cellElements = document.querySelectorAll("[data-cell]")
//12. restart
const restartButton=document.getElementById("restartButton")


//turn true circle false x
let circleTurn

//6. call startGame
startGame()

//12. restart
restartButton.addEventListener("click",startGame)
//5. use startGame func
function startGame(){
  circleTurn=false
  cellElements.forEach(cell=>{
    //13. remove classes and click 
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener("click",handleClick)
    cell.addEventListener("click",handleClick,{once:true})//once:true is only fire event once!
})
setBoardHoverClass()
//13. even click nothing happen because we did not remove show class
winningMessageElement.classList.remove("show")
}

function handleClick(e){
  //1. place mark
  //2. check for win
  //3. check for draw
  //4. switch turns
  const cell = e.target//whatever we click
  const currentClass = circleTurn? CIRCLE_CLASS:X_CLASS
  //1 mark
  placeMArk(cell,currentClass)
  
  //8.checkWin
  if(checkWin(currentClass)){
    //9.endGame
    endGame(false)//not draw so win
    //11. isDraw
  }else if(isDraw()){
    endGame(true)//draw
  }else{
    swapTurns()//2.swap turn
    setBoardHoverClass()//3. set hover class
  } 
}
// 9. endGame
function endGame(draw){
  if(draw){
    //11. -1
    winningMessageTextElement.innerText="Draw!"
  }else{
    //10. winningMessageTextElement
    winningMessageTextElement.innerText=`${circleTurn ? "O's":"X's"} Wins!`
    console.log(circleTurn)
  }
  winningMessageElement.classList.add("show")
}

//11.-2
function isDraw(){
  return [...cellElements].every(cell=>{
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

//placeMark func//add x or circle
function placeMArk(cell,currentClass){
  cell.classList.add(currentClass)
}

function swapTurns(){
  circleTurn=!circleTurn
}

function setBoardHoverClass(){
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if(circleTurn){
    board.classList.add(CIRCLE_CLASS)
  }else{
    board.classList.add(X_CLASS)
  }
  //4. when we start game we want to show hover too!
}
//8. checkWin// don't understand
function checkWin(currentClass){
  return WINNING_COMBINATION.some(combination=>{
    return combination.every(index=>{
      return cellElements[index].classList.contains(currentClass)
    })
  })
}