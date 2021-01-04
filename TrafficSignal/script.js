
function startSignal() {

    
  let counter = 240;
  const myInterval = setInterval(() => {
    // Signal Left
    if (counter === 240) {
    
      function leftSignal() {
        let seconds = 60;
        var red = setInterval(() => {
             
          var l1 = document.querySelector(".l1");
          var l2 = document.querySelector(".l2");
          var l3 = document.querySelector(".l3");
        
          // Display the color when countdown is running
          document.querySelector("#lCount").innerHTML = seconds;

          if (seconds === 60) {
            l3.style.background = "#111";
            l1.style.background = "#E11218";
          } else if (seconds === 40 ) {
            l1.style.background = "#111";
            l2.style.background = "#FFFF00";
          } else if (seconds === 30 ) {
            l2.style.background = "#111";
            l3.style.background = "#358A22";
          } else if (seconds === 0) {
            clearInterval(red);
            l3.style.background = "#111";
            l1.style.background = "#E11218";
          }
          seconds--;
        }, 1000);
      }
      console.info("signal 1 green");
      document.onload = leftSignal();
    } 
    else if (counter === 180) {
        let seconds = 60;
        function bottomSignal() {
        var red = setInterval(function () {
          var b1 = document.querySelector(".b1");
          var b2 = document.querySelector(".b2");
          var b3 = document.querySelector(".b3");

          // Display the color when countdown is running
          document.querySelector("#bCount").innerHTML = seconds;

          if (seconds === 60) {
            b3.style.background = "#111";
            b1.style.background = "#E11218";
          } else if (seconds === 40 ) {
            b1.style.background = "#111";
            b2.style.background = "#FFFF00";
          } else if (seconds === 30) {
            b2.style.background = "#111";
            b3.style.background = "#358A22";
          } else if (seconds === 0) {
            clearInterval(red);
            b3.style.background = "#111";
            b1.style.background = "#E11218";
          }
          seconds--;
        }, 1000);
      }
      console.info("signal 2 green");
      document.onload = bottomSignal();
    } 
    else if (counter === 120) {
        let seconds = 60;
        function rightSignal() {
        var red = setInterval(function () {
          var r1 = document.querySelector(".r1");
          var r2 = document.querySelector(".r2");
          var r3 = document.querySelector(".r3");

          // Display the color when countdown is running
          document.querySelector("#rCount").innerHTML = seconds;

          if (seconds === 60) {
            r3.style.background = "#111";
            r1.style.background = "#E11218";
          } else if (seconds === 40) {
            r1.style.background = "#111";
            r2.style.background = "#FFFF00";
          } else if (seconds === 30) {
            r2.style.background = "#111";
            r3.style.background = "#358A22";
          } else if (seconds === 0) {
            clearInterval(red);
            r3.style.background = "#111";
            r1.style.background = "#E11218";
          }
          seconds--;
        }, 1000);
      }
      console.info("signal 3 green");
      document.onload = rightSignal();
      
    } 
    else if (counter === 60) {
        let seconds = 60;
        function topSignal() {
        
        var red = setInterval(function () {
          var t1 = document.querySelector(".t1");
          var t2 = document.querySelector(".t2");
          var t3 = document.querySelector(".t3");

          // Display the color when countdown is running
          document.querySelector("#tCount").innerHTML = seconds;

          if (seconds < 60 && seconds > 41) {
            t3.style.background = "#111";
            t1.style.background = "#E11218";
          } else if (seconds > 21 && seconds < 40) {
            t1.style.background = "#111";
            t2.style.background = "#FFFF00";
          } else if (seconds > 0 && seconds < 21) {
            t2.style.background = "#111";
            t3.style.background = "#358A22";
          } else if (seconds === 0) {
            clearInterval(red);
            t3.style.background = "#111";
            t1.style.background = "#E11218";
          }
          seconds--;
        }, 1000);
      }
      console.info("signal 4 green");
      document.onload = topSignal();
    } else if (counter === 1) {
      clearInterval(myInterval);
      return startSignal();
    }
    console.log("counter: ", counter);
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

