$(".drum").click( function() {
        let btnInnerHTML = this.innerHTML ;
        makeSound(btnInnerHTML) ;
        btnAnimation(btnInnerHTML) ;
    }
   ) ;


$(document).keydown(function(event) {
    makeSound(event.key) ;
    btnAnimation(event.key) ;
}) ;

function makeSound(key) {
    switch (key) {
        case "d":
                let d = new Audio("sounds/tom-1.mp3");               
                d.play();
                break;
        case "j":
            let j = new Audio("sounds/tom-2.mp3") ;
            j.play() ;    
            break ;
        case "k":
            let k = new Audio("sounds/tom-3.mp3") ;
            k.play() ;
            break ;
        case "l":
            let l = new Audio("sounds/tom-4.mp3") ;
            l.play() ;
            break ;

        case "w":
            let w = new Audio("sounds/crash.mp3") ;
            w.play() ;
            break ;
        case "a":
            let a = new Audio("sounds/kick-bass.mp3") ;
            a.play() ;
            break ;
        case "s":
            let s = new Audio("sounds/snare.mp3") ;
            s.play() ;
            break;    
        default:
            console.log(this.innerHTML) ;
            break ;
           
    }
}

function btnAnimation(currentkey) {
    let activeButton = $("."+currentkey) ;
    activeButton.addClass("pressed") ; 

    setTimeout(function() {
        activeButton.removeClass("pressed") ;
    } , 200)

}