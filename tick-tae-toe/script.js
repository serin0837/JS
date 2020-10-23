//place the marks
const X_CLASS ="x"
const CIRCLE_CLASS= "circle"

const board = document.getElementById("board")
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

const winningMessageTextElement = document.querySelector("[ data-winning-message-text]")
const winningMessageElement = document.getElementById("winningMessage")
const cellElements = document.querySelectorAll("[data-cell]")


//turn true circle false x
let circleTurn

cellElements.forEach(cell=>{
    cell.addEventListener("click",handleClick,{once:true})//once:true is only fire event once!
})


function handleClick(e){
  //1. place mark
  //2. check for win
  //3. check for draw
  //4. switch turns
  const cell = e.target//whatever we click
  const currentClass = circleTurn? CIRCLE_CLASS:X_CLASS
  placeMArk(cell,currentClass)
  swapTurns()

  //hover class
  setBoardHoverClass()

  if(checkWin(currentClass)){
    endGame(false)
  }else if(isDraw()){
    endGame(true)
  }else{
    swapTurns()
    setBoardHoverClass()
  } 
}
// can not understand.....
function endGame(draw){
  if(draw){
    winningMessageElement.innerText="Draw!"
  }else{
    winningMessageTextElement.innerText=`${circleTurn?"O's":"X's"} Wins!`
  }
  winningMessageElement.classList.add("show")
}
//placeMark func//add x or circle
function placeMArk(cell,currentClass){
  cell.classList.add(currentClass)
}

function isDraw(){
  return [...cellElements].every(cell=>{
    return cell.classList.contains(X_CLASS)||cell.classList.contains(CIRCLE_CLASS)
  })
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
}
//not get it //
function checkWin(currentClass){
  return WINNING_COMBINATION.some(combination=>{
    return combination.every(index=>{
      return cellElements[index].classList.contains(currentClass)
    })
  })
}