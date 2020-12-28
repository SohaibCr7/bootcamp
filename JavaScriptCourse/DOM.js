const HourHand = document.querySelector("#hour");
const MinuteHand = document.querySelector("#minute");
const SecondHand = document.querySelector("#second");

var date = new Date();
    console.log(date);

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log("Hours: " +hr+ " Minutes: " +min+ " Seconds: "+sec);
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;


function runClock(){

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HourHand.style.transform = "rotate("+ hrPosition + "deg)";
    MinuteHand.style.transform = "rotate("+ minPosition + "deg)";
    SecondHand.style.transform = "rotate("+ secPosition + "deg)";
}

var interval = setInterval(runClock, 1000);

function togg(){
    var element = document.getElementById("myDiv");
    element.classList.toggle("mystyle");
}

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function revel(e){
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}
CTA.onclick = revel;



