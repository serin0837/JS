const cellElements = document.querySelectorAll("[data-cell]")

cellElements.forEach(cell=>{
    cell.addEventListener("click",handleClick,{once:true})
})
//once:true is only fire event once!

function handleClick(e){
  ///place mark
  //check for win
  //check for draw
  //switch turns

  
}