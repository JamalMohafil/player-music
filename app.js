// تعريف وتحديد جميع العناصر المطلوبة
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var audio = document.getElementById("audio");
var reload = document.getElementById("reload");
var range = document.getElementById("range");
var current = document.getElementById("current"); // إضافة تعريف لعنصر current

// أزرار التشغيل الأساسية
play.addEventListener("click", () => {
    audio.play();
});

stop.addEventListener("click", () => {
    audio.pause();
});

reload.addEventListener("click", () => {
    audio.load();
});

// تحديد أزرار الأغاني
let playbtn = document.getElementById("playbtn");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");

// تعيين قيم الأغاني
one.value = "هزتني نسمات الليالي.mp3";
two.value = "جنة جنة جنة.mp3";
three.value = "واقف مصدوم.mp3";
four.value = "عاشت ايدك.mp3";
five.value = "حلمي تحطم واختفى.mp3";
six.value = "قدام الكل.mp3";

var audioName = document.getElementById("name");
var audio_items = document.querySelectorAll(".bt");
var start = document.getElementById("start");

// معالجة النقر على أزرار الأغاني
audio_items.forEach(item => {
    item.addEventListener("click", () => {
        // تفريغ المصدر الحالي
        audio.src = "";
        
        // تعيين اسم الأغنية والمصدر الجديد
        audioName.innerHTML = item.textContent;
        audio.src = item.value;
        
        // إظهار زر التشغيل وبدء التشغيل
        playbtn.style.display = "block";
        audio.play();
        playbtn.classList.remove("uil-play");
        playbtn.classList.add("uil-pause");
    });
});

// إعدادات الوقت
var setTimee = document.getElementById("time");
setTimee.addEventListener("click", () => {
    alert("This is the time");
});

// إعدادات المظهر (الوضع الليلي والنهاري)
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var nav = document.getElementById("nav");
var btn = document.querySelectorAll(".btn-primary");

moon.addEventListener("click", () => {
    document.body.style.background = "hsl(252,30%,10%)";
    nav.style.background = "hsl(var(--primary-color-hue),40%,50%)";
});

sun.addEventListener("click", () => {
    document.body.style.background = "#e91e63";
    nav.style.background = "#fff";
});

// تعريف شريط التقدم
let progress = document.getElementById("progress");

// وظيفة التشغيل والإيقاف
var playpause = function() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};

playbtn.addEventListener("click", playpause);

// تحديث واجهة المستخدم عند التشغيل والإيقاف
audio.onplay = function() {
    playbtn.classList.remove("uil-play");
    playbtn.classList.add("uil-pause");
};

audio.onpause = function() {
    playbtn.classList.add("uil-play");
    playbtn.classList.remove("uil-pause");
};

// تحديث شريط التقدم والوقت الحالي
audio.ontimeupdate = function() {
    let ct = audio.currentTime;
    current.innerHTML = timeFormat(ct);
    
    // تحديث شريط التقدم
    let duration = audio.duration;
    if (!isNaN(duration)) {
        let prog = Math.floor((ct * 100) / duration);
        progress.style.setProperty("--progress", prog + "%");
    }
};

// تنسيق الوقت
function timeFormat(ct) {
    let minutes = Math.floor(ct / 60);
    let seconds = Math.floor(ct % 60);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    return minutes + ":" + seconds;
}

// تحديث عنصر التحكم في مستوى الصوت
var volumeSlider = document.querySelector("input[type='range']");
volumeSlider.oninput = function() {
    let progressBar = document.querySelector("progress");
    progressBar.value = volumeSlider.value;
    
    var sliderValue = document.querySelector(".sliderValue");
    sliderValue.innerHTML = volumeSlider.value;
    
    audio.volume = volumeSlider.value / 100;
};

// تحديث الوقت والتاريخ
function updateDate() {
    var date = new Date();
    var setTimee = document.getElementById("time");
    setTimee.innerHTML = 
        (date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + 
        (date.getMinutes() < 10 ? "0" : "") + date.getMinutes() + ":" + 
        (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}

setInterval(updateDate, 500);
onload = updateDate();
