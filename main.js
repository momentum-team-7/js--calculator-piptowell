// declaring constants so they can't be changed
const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".num-button")
const operators = document.querySelectorAll(".op-button")
const button = document.querySelectorAll(".button")

// display.innertext = display.innertext + targetVal 


let targetVal = display.innerText

// adding event listeners to .num-button class
// console.logging to verify the click
// ** having trouble with getting target values to register as values instead of undefined
document.querySelectorAll('.num-button').forEach(item => {
    item.addEventListener('click', event => {
    console.log(event.target.innertext)

    let userInput = display.innertext
            });
})

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
    console.log('Your button has been clicked, sir')
    // let userInput = event.target.value
    event.target.value = targetVal
    });
})

document.querySelectorAll('.op-button').forEach(item => {
    item.addEventListener('click', event => {
    console.log(event.target.value)
    // let userInput = event.target.value
            });
})


// let inputValueTwo = event.target.value



// general outline of what i want to do///////
// get a reference to each dom node i need ("1" button, "2" button)
// add event listeners to each button, when clicked, store value in variable
// concatenate that variable into a string called userInput
// display new string in the display
// when user clicks the "=" ----
//     clear the display
//     pass the userInput string to the eval() function
//     give new variable name to result 
//     display result




// once i have event.target.value, 
// if statement for if next input is number type, add to value,
// else if it's an operand, store all three together until the = is hit, then evaluate and display on screen.



// test & function to see if my click event works. it does!
// var firstbutton = document.getElementById('plus').addEventListener('click', buttonClick);

// function buttonClick() {
    // console.log('Your button has been clicked, sir')
// }


