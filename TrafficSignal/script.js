// var SignalLeft = document.querySelector(".signal-body1");

// var SignalBottom = document.querySelector(".signal-body2");

// var SignalRight = document.querySelector(".signal-body3");

// var SignalTop = document.querySelector(".signal-body4");


// var ACL = 1;
// var ACB = 1;
// var ACR = 1;

// var ACT = 1;

 // The data/time we want to countdown to
 var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();


// Signal Left
function leftSignal() {
            var red = setInterval(() => {
            var l1 = document.querySelector(".l1");
            var l2 = document.querySelector(".l2");
            var l3 = document.querySelector(".l3");
            var now = new Date().getTime();
            var timeleft = countDownDate - now;
            seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            document.querySelector("#lCount").innerHTML = seconds; 
            // Display the color when countdown is running
            if (seconds < 60 && seconds > 41) 
              {
                    runningTime = true;
                    // clearInterval(red);
                    // l1.style.background = "#fff";
                    l3.style.background = "#111";
                    l1.style.background = "#E11218";
              }
              else if(seconds > 21 && seconds < 40)
              {
                runningTime = true;
                l1.style.background = "#111";
                l2.style.background = "#FFFF00";
              }
              else if(seconds > 0 && seconds < 21)
              {
                  l2.style.background = "#111";
                  l3.style.background = "#358A22"
              }
            
            }, 1000);
            
        
}


function bottomSignal() {
    
    var red = setInterval(function() {
    var b1 = document.querySelector(".b1");
    var b2 = document.querySelector(".b2");
    var b3 = document.querySelector(".b3");
    var now = new Date().getTime();
    
    var timeleft = countDownDate - now;
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.querySelector("#bCount").innerHTML = seconds; 
    // Display the color when countdown is running
    if (seconds < 60 && seconds > 41) 
      {
            // clearInterval(red);
            // l1.style.background = "#fff";
            b3.style.background = "#111";
            b1.style.background = "#E11218";
      }
      else if(seconds > 21 && seconds < 40)
      {
        b1.style.background = "#111";
        b2.style.background = "#FFFF00";
      }
      else if(seconds > 0 && seconds < 21)
      {
          b2.style.background = "#111";
          b3.style.background = "#358A22"
      }
    
    }, 1000);
    
}

function rightSignal() {
    
    var red = setInterval(function() {
    var r1 = document.querySelector(".r1");
    var r2 = document.querySelector(".r2");
    var r3 = document.querySelector(".r3");
    var now = new Date().getTime();
    
    var timeleft = countDownDate - now;
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.querySelector("#rCount").innerHTML = seconds; 
    // Display the color when countdown is running
    if (seconds < 60 && seconds > 41) 
      {
            // clearInterval(red);
            // l1.style.background = "#fff";
            r3.style.background = "#111";
            r1.style.background = "#E11218";
      }
      else if(seconds > 21 && seconds < 40)
      {
        r1.style.background = "#111";
        r2.style.background = "#FFFF00";
      }
      else if(seconds > 0 && seconds < 21)
      {
          r2.style.background = "#111";
          r3.style.background = "#358A22"
      }
    
    }, 1000);
    
}

function topSignal(){

    var red = setInterval(function() {
        var t1 = document.querySelector(".t1");
        var t2 = document.querySelector(".t2");
        var t3 = document.querySelector(".t3");
        var now = new Date().getTime();
        
        var timeleft = countDownDate - now;
        seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        document.querySelector("#tCount").innerHTML = seconds; 
        // Display the color when countdown is running
        if (seconds < 60 && seconds > 41) 
          {
                // clearInterval(red);
                // l1.style.background = "#fff";
                t3.style.background = "#111";
                t1.style.background = "#E11218";
          }
          else if(seconds > 21 && seconds < 40)
          {
            t1.style.background = "#111";
            t2.style.background = "#FFFF00";
          }
          else if(seconds > 0 && seconds < 21)
          {
              t2.style.background = "#111";
              t3.style.background = "#358A22"
          }
        
        }, 1000);

}

document.onload = setInterval(leftSignal, 0);
document.onload = setInterval(bottomSignal, 60000); 
document.onload = setInterval(rightSignal, 120000);
document.onload = setInterval(topSignal, 180000) 


// function topSignal(){

//     let t1 = SignalTop.querySelector(".t1");
//     let t2 = SignalTop.querySelector(".t2");
//     let t3 = SignalTop.querySelector(".t3");
//     t1.style.background = "#fff";
//     t2.style.background = "#fff";
//     t3.style.background = "#fff";
//     if (ACT == 1) 
//     {
//         t1.style.background = "#E11218";
//         ACT = 2;
//     } 
//     else if(ACT == 2) 
//     {
//         t2.style.background = "#FFFF00";
//         ACT = 3;
//     } 
//     else if(ACT == 3) 
//     {
//         t3.style.background = "#358A22";
//         ACT = 1;
//     }
// }


// document.onload = setInterval(rightSignal, 3000);
// document.onload = setInterval(topSignal, 4000);







