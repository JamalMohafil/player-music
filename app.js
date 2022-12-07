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
let playbtn = document.getElementById("playbtn");

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
one.value = "هزتني نسمات الليالي.mp3"
two.value = "جنة جنة جنة.mp3"
three.value = "واقف مصدوم.mp3"
four.value = "عاشت ايدك.mp3"
five.value = "حلمي تحطم واختفى.mp3"
six.value = "قدام الكل.mp3"

var audioName = document.getElementById("name")

var audio_items = document.querySelectorAll(".bt");
var start = document.getElementById("start");
audio_items.forEach(item =>{
    item.addEventListener("click",()=>{
        audio_items.forEach(item =>{
            audio.src = ""
        })
   
        audioName.innerHTML = item.value
        audio.src = item.value;
playbtn.style.display = "block";
audio.play();
playbtn.classList.add("uil-pause");
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

// var player = document.getElementById("player");
let progress = document.getElementById("progress");


var playpause = function(){
 
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}
playbtn.addEventListener("click", playpause);
audio.onplay = function () {
    playbtn.classList.remove("uil-play");
    playbtn.classList.add("uil-pause");
  }
  audio.onpause = function () {
    playbtn.classList.add("uil-play");
    playbtn.classList.remove("uil-pause");
  }

  audio.ontimeupdate = function () {
    let ct = audio.currentTime;
    current.innerHTML = timeFormat(ct);
    //progress
    let duration = audio.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");
 }


 function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0"+seconds;
    }
    return minutes + ":" + seconds;
   }
   