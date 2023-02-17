document.addEventListener('keypress', function(event) {
    gotpressed(event.key);
    animation(event.key);
});

function gotpressed(key) {
    //or this.innerHTML
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}




//mouse clicke
function gotclicked() {
    var st; //before passing into function dothis

    //or this.innerHTML
    switch (this.textContent) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}
for (var i = 0; i < 8; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", gotclicked);
    //ever funtion should be mention in fucntion or 
    //   document.querySelectorAll(".drum")[i].addEventListener("click", gotclicked()
    //{
    // this.style.color = "white";
    //}

}

function animation(key) {
    var thaat = document.querySelector("." + "key");
    thaat.classList.add("pressed");
    setTimeout(function() {
        thaat.classList.remove("pressed");
    }, 100);

}