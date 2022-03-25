window.addEventListener('keydown', playSound);

function playSound() {
    //As we have two type of elements with the data attribute 'data-key' we must specify which element we want to retrieve 
    //So we further specify our css selector by putting audio next to the attribute


    // When we press a character on a keyboard, every character has an attribute called keyCode which represents that character
    //In our HTML document we set our audio element a specific value for data-key
    //If our keyCode value which is retrieved by pressing a keyboard character equals the data-key value we set it will retrieve that audio element. (e is the current event)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //.play() plays an audio track or video.

    const key = document.querySelector(`.keys[data-key="${e.keyCode}"`);

    if (!audio) return;

    //Audio elements have a property called currentTime which is the current time of audio track
    audio.currentTime = 0; //By setting it to 0 it restarts the track.
    audio.play();

    //Adds transition (animation) class, we can add classes we style after in JS using classList.add etc, we have used this to add an animation class after a button is pressed.
    key.classList.add("playing");
}

const keys = document.querySelectorAll('.keys')

//To keep replaying transition we must add and remove the transition class 'playing'. We have done this by using the classList.remove. We use the 'this' keyword to target the current
//object that is playing the transition, we then remove the transition for this current object.
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

//We first get a list of all our divs that the class 'playing' is added to and we simply listen for when the transition ends, then we simply remove the transition
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
})