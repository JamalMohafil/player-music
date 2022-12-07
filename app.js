var play = document.getElementById("play");
var stop = document.getElementById("stop");
var audio = document.getElementById("audio");
var reload = document.getElementById("reload");
var range = document.getElementById("range")
play.addEventListener("click",()=>{
 audio.play();
})
stop.addEventListener("click",()=>{
 audio.pause();
})
reload.addEventListener("click",()=>{
 audio.load();
})


var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
one.value = "3.mp3"
two.value = "5.mp3"
three.value = "4.mp3"
four.value = "1.mp3"
five.value = "2.mp3"
six.value = "6.mp3"



var audio_items = document.querySelectorAll(".bt");

audio_items.forEach(item =>{
    item.addEventListener("click",()=>{
        audio_items.forEach(item =>{
            audio.src = ""
        })

        audio.src = item.value;
    })
})
var setTimee = document.getElementById("time");
setTimee.addEventListener("click",()=>{
    alert("This is the time ")
})

var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var nav = document.getElementById("nav");
var btn = document.querySelectorAll(".btn-primary")
moon.addEventListener("click",()=>{
    document.body.style.background = "hsl(252,30%,10%)"
   nav.style.background = "hsl(var(--primary-color-hue),40%,50%)"


})
sun.addEventListener("click",()=>{
    document.body.style.background = "#e91e63"
   nav.style.background = "#fff"
   

})