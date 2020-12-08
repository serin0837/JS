//6. How to create our fundamental game variables
// how to generate a random number
// how to manipulate the DOM
// How to read from the DOM
//how to changes CSS styles

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0 // 0 first player 1 second player

// dice = Math.floor(Math.random() * 6) + 1

// document.querySelector("#current--"+ activePlayer).textContent = dice;
//querySelector? exactly same as the way we do CSS, it only select first one that defined
//textContent change content
//activePlayer 0 or 1 its going to be change depends on activePlayer number 
//textContent = > can only be plain text 
// if we want html code we need to put html code
//setter(set a value with innerHTML and textContent)
// document.querySelector("#current--"+ activePlayer).innerHTML = "<em>"+dice+"</em>";// italic text

//<querySelector can just user to read>
// var x = document.querySelector("#score--0").textContent
// console.log(x)
//getter (read)

// queryselector to change CSS
//use style for css
document.querySelector(".dice").style.display = "none"

//7. <event>
// events: notifications that are sent to notify the code that something happende on weppage
// examples; click button, resizing a window, scrolling down, pressing key...
//event listner : a function that performs an action based on a certain event, It waits for a specific event to happen.

//How events are processed?
//execution context // execution stack is empty event working?
//message queue
//click event in message queue and function execution context 
//7. how to set up an even handler
//what callback function is
//what an anonymous function is
//another way to select elements by ID
//How to change the image in an <img> element
document.getElementById("score--0").textContent = 0
//we don't use hash tag//different way to select element
document.getElementById("score--1").textContent = 0
document.getElementById("current--0").textContent = 0
document.getElementById("current--1").textContent = 0

document.querySelector(".btn--roll").addEventListener("click", function(){
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1

    //2. Display the result
    let diceDOM = document.querySelector(".dice")
    diceDOM.style.display = "block"
    diceDOM.src = "./images/dice-"+ dice+".png"
    //3. update the round score If the rolled number was Not a 1
    if (dice !== 1) {
        //Add score 
        roundScore += dice;
        document.querySelector("#current--"+ activePlayer).textContent = roundScore;
    } else {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0

        document.getElementById("current--0").textContent = "0"
        document.getElementById("current--1").textContent = "0"

        document.querySelector(".player--0").classList.toggle("player--active")
        document.querySelector(".player--1").classList.toggle("player--active")

        // document.querySelector(".player--0").classList.remove("player--active")
        // document.querySelector(".player--1").classList.add("player--active")
        document.querySelector(".dice").style.display = "none"
    }
})
//we don't have to call a fucntion in args in addEventListner becuase
//addEventListener will call callback function when we get event 
//anonymouse function no name, we can not use again 
//we can also put anonymous function as second args


//8. <updating score>
// what the ternary operator is 
//how to add, remove and toggle HTML classes

//9. to be continue!





















