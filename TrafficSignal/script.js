function startSignal() {
  let counter = 240;
  let seconds = 60;
  var myInterval = setInterval(() => {
    // Signal Left
    if (counter <= 240 && counter > 180) {

      var l1 = document.querySelector(".l1");
      var l2 = document.querySelector(".l2");
      var l3 = document.querySelector(".l3");

      // Display the color when countdown is running
      document.querySelector("#lCount").innerHTML = seconds;

      if (seconds <= 60 && seconds > 35) {
        l3.style.background = "#111";
        l1.style.background = "#E11218";
      } else if (seconds <= 35 && seconds > 25) {
        l1.style.background = "#111";
        l2.style.background = "#FFFF00";
      } else if (seconds <= 25 && seconds > 1) {
        l2.style.background = "#111";
        l3.style.background = "#358A22";
      } else if (seconds >= 0 || seconds > 1) {
        
        seconds=60;
        document.querySelector("#lCount").innerHTML = seconds;
        l3.style.background = "#111";
        l1.style.background = "#E11218";
      }

      console.info("signal 1 green");
      
    } 

    else if (counter <= 180 && counter > 120) {

      var b1 = document.querySelector(".b1");
      var b2 = document.querySelector(".b2");
      var b3 = document.querySelector(".b3");

      // Display the color when countdown is running
      document.querySelector("#bCount").innerHTML = seconds;

      if (seconds <= 60 && seconds > 35) {
        b3.style.background = "#111";
        b1.style.background = "#E11218";
      } else if (seconds <= 35 && seconds > 25) {
        b1.style.background = "#111";
        b2.style.background = "#FFFF00";
      } else if (seconds <= 25 && seconds > 1) {
        b2.style.background = "#111";
        b3.style.background = "#358A22";
      } else if (seconds >= 0 || seconds > 1) {
        
        seconds=60;
        document.querySelector("#bCount").innerHTML = seconds;
        b3.style.background = "#111";
        b1.style.background = "#E11218";
      }
      console.info("signal 2 green");
      
    }
     else if (counter <= 120 && counter > 60) 
     {
     
      var r1 = document.querySelector(".r1");
      var r2 = document.querySelector(".r2");
      var r3 = document.querySelector(".r3");

      // Display the color when countdown is running
      document.querySelector("#rCount").innerHTML = seconds;

      if (seconds <= 60 && seconds > 35) {
        r3.style.background = "#111";
        r1.style.background = "#E11218";
      } else if (seconds <= 35 && seconds > 25) {
        r1.style.background = "#111";
        r2.style.background = "#FFFF00";
      } else if (seconds <= 25 && seconds > 0) {
        r2.style.background = "#111";
        r3.style.background = "#358A22";
      } else if (seconds >= 0 || seconds > 1) {
        // clearInterval(red);
        seconds=60;
        document.querySelector("#rCount").innerHTML = seconds;
        r3.style.background = "#111";
        r1.style.background = "#E11218";
      }

      console.info("signal 3 green");
    } 
    else if (counter <= 60 && counter > 0) {

      var t1 = document.querySelector(".t1");
      var t2 = document.querySelector(".t2");
      var t3 = document.querySelector(".t3");

      // Display the color when countdown is running
      document.querySelector("#tCount").innerHTML = seconds;

      if (seconds <= 60 && seconds > 35) {
        t3.style.background = "#111";
        t1.style.background = "#E11218";
      } else if (seconds <= 35 && seconds > 25) {
        t1.style.background = "#111";
        t2.style.background = "#FFFF00";
      } else if (seconds <= 25 && seconds > 0) {
        t2.style.background = "#111";
        t3.style.background = "#358A22";
      } else if (seconds >= 0 || seconds > 1) {
        seconds=60;
        document.querySelector("#tCount").innerHTML = seconds;
        t3.style.background = "#111";
        t1.style.background = "#E11218";
      }
      console.info("signal 4 green");
    } 
    else if (counter === 0) {
      clearInterval(myInterval);
      return startSignal();
    }
    console.log("counter: ", counter);
    seconds--;
    counter--;
  }, 1000);
}

var b1 = document.querySelector(".b1");
var r1 = document.querySelector(".r1");
var t1 = document.querySelector(".t1");

b1.style.background = "#E11218";
r1.style.background = "#E11218";
t1.style.background = "#E11218";
document.onload = startSignal();
