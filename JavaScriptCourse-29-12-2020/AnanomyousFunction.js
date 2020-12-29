
const testWrapper = document.querySelector(".test-wrapper");
const textArea = document.querySelector("#text-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timmerRunning = false;

//run timer for minutes, haours, seconds 
function runTimer() {
    let currentTime = leadingZero(timer[0]) +":"+ leadingZero(timer[1]) +":"+ leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++; 

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

//Speel checker of text area
function spellCheck() {

    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if(textEntered == originText)
    {
        clearInterval(interval);
        testWrapper.style.borderColor = "5px solid #429890";   
    }
    else{
        if( textEntered == originTextMatch)
        {
            testWrapper.style.borderColor = "#65CCf3";
        }
        else
        {
            testWrapper.style.borderColor = "#E95D07";
        }
    }
    
}

//Start timer
function start() {

    let textEnteredLength = textArea.value.length;

    if(textEnteredLength === 0 && !timmerRunning)
    {
        timmerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}

//reset button for text reset or time:

function reset() {
    clearInterval(interval);
    interval = null;
    time = [0,0,0,0];
    timmerRunning = false;
    textArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    console.log("Reset is pressed");
}

function leadingZero(time) {

    if(time <= 9)
    {
        time = "0" + time;
    }
    return time;

}

textArea.addEventListener("keypress",start,false);
textArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click" , reset, false);
