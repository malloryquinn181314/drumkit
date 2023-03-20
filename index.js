for (n = 0; n <= document.querySelectorAll(".drum").length; n++) {

document.querySelectorAll("button")[n].addEventListener("click", function(){

    var clicked = this.innerHTML;
    handleClicks(clicked);
    glow(clicked);

});

document.addEventListener("keydown", function(shit){

    handleClicks(shit.key);
    glow(shit.key);

});

}

function handleClicks(key){

    switch (key) {
        case "w":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;

        case "a":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;

        case "s":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('voice.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;


        case "l":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
    
        default: console.log(clicked);
            break;

    
    }




  
}


function glow (currentkey){

    var buttonPressed = document.querySelector("." + currentkey);
    
    buttonPressed.classList.add("pressed");

    setTimeout(() => {
       
        buttonPressed.classList.remove("pressed");

    }, 100);
 
}
