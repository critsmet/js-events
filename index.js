// - - - - - - - - - --
//QUICK DEMO OF CLOSURE
// - - - - - - - - - --

// function outerFunction(){
//   const secretWord = "Bubbles"
//
//   function saySecretWord(){
//     console.log(secretWord)
//   }
//
//   return saySecretWord
// }
//
// const secretWordFunction = outerFunction()
//
// secretWordFunction()

//CLOSURE: Any situation in which we are aware that we are defining a function within the scope of another function, and we use that to our advantage/apply that

// - - - - - - - - - --
//EVENT LISTENERS
// - - - - - - - - - --

// body.addEventListener('click', function(){console.log("Captured: body!")}, {capture: true})
// addEmojiArea.addEventListener('click', function(){console.log("Captured: Div!")}, {capture: true})
// button.addEventListener('click', function(){console.log("Captured: Button!")}, true)
//
// body.addEventListener('click', function(){console.log("Bubbling: body!")})
// addEmojiArea.addEventListener('click', function(){console.log("Bubbling: Div!")})
// button.addEventListener('click', function(){console.log("Bubbling: Button!")})
//addEventListener takes two arguments, the first is a string of the event type,
//and the second is a callback function that basically determines which action to take
//the callback function must be a function reference NOT a function execution


// function handleClick(){
//   console.log("We clicked the button")
// }





















//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//an emoji I click on turns into '🤪'


const button = document.getElementById('add-button')
const addEmojiArea = document.getElementById('add-emoji-area')

addEmojiArea.addEventListener('click', handleAreaClick)

function handleAreaClick(event){
  if (event.target.id == "add-button") {
    console.log("This is the change form button")
    addForm()
  }
  else if (event.target.id == "submit") {
    //run the function that we haven't written yet
    console.log("This is the submit emoji button")
  }
}

//1. we want to replace the HTML inside of the add-emoji-area div with a form, not a button
//We'll do this by...appending a form to addEmojiArea and remove the button tag

//2. we want to take the emoji that's been placed in the input ON SUBMIT, append it to the UL as an LI, and reset the form back to the add emoji button, and add an alert.

//

// const form = document.createElement('form')
// const input = document.createElement('input')
// form.appendChild(input)

const form = `
  <form>
    <input id="emoji-input" type="text"/>
    <input id="submit" type="submit" value="Submit Emoji!"
  </form>
`
// button.addEventListener('click', addForm)

function addForm(){
  addEmojiArea.innerHTML = form
}


//SPA: Single page applications: there are no refreshes, all DOM changes are made with JS











//
