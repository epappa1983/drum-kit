// add event listener to all buttons

var drumButtons = document.querySelectorAll(".drum");

for (var i=0;i<drumButtons.length;i++) {
    drumButtons[i].style.color = "red";
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}

function playSound(input) {
  switch (input) {
    case "w":
        var snareSound = new Audio("./sounds/snare.mp3");
        snareSound.play();
      break;
    
    case "a":
        var crashSound = new Audio("./sounds/crash.mp3");
        crashSound.play();
      break;

    case "s":
        var kickSound = new Audio("./sounds/kick-bass.mp3");
        kickSound.play();
      break;

    case "d":
        var tom1Sound = new Audio("./sounds/tom-1.mp3");
        tom1Sound.play();
      break;
    
    case "j":
        var tom2Sound = new Audio("./sounds/tom-2.mp3");
        tom2Sound.play();
      break;
    
    case "k":
        var tom3Sound = new Audio("./sounds/tom-3.mp3");
        tom3Sound.play();
      break;
    
    case "l":
        var tom4Sound = new Audio("./sounds/tom-4.mp3");
        tom4Sound.play();
      break;

    default: console.log("unexpected button clicked triggering eventlistener" + buttonInnerHTML)
  }
}


for (var i=0;i<drumButtons.length;i++) {
    drumButtons[i].addEventListener("click",function(){

        // we need to know which button got clicked so we can play correct sound
        // which button triggered the event?

        // the "this" keyword gives us the button that triggered the event! 
        // this.style.color = "white";

        // using switch statement to play appropriate sound
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// eventlistener for keystrokes
document.addEventListener("keydown",function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});
