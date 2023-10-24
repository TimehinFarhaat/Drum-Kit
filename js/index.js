var number0fDrumButtons = document.querySelectorAll(".drum").length;

for (var i =0; i < number0fDrumButtons; i++) 
{

   
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHtml= this.innerHTML;
       
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
      
    });
    
}

document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
})




function makeSound(key)
{
    switch(key)
    {
        case "w":
            var audio=new Audio("sound/tom-1.mp3");
            var d= audio.play();
        break;
        case "a":
            var audio=new Audio("sound/tom-2.mp3");
            var d= audio.play();
        break;
        case "s":
            var audio=new Audio("sound/tom-3.mp3");
            var d= audio.play();
        break;    
        case "d":
            var audio=new Audio("sound/tom-4.mp3");
            var d= audio.play();
        break;    
        case "j":
            var audio=new Audio("sound/snare.mp3");
            var d= audio.play();
        break;    
        case "k":
            var audio=new Audio("sound/crash.mp3");
            var d= audio.play();
        break;    
        case "l":
            var audio=new Audio("sound/kick-bass.mp3");
            var d= audio.play();
        break;    
        default:
            console.log(this);
        break;
    }
}


function buttonAnimation(currentKey)
{
 var activeButton=document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
 activeButton.classList.remove("pressed");
 },100)
}