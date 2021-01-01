var SignalLeft = document.querySelector(".signal-body1");

var SignalBottom = document.querySelector(".signal-body2");

var SignalRight = document.querySelector(".signal-body3");

var SignalTop = document.querySelector(".signal-body4");

// var intervalRed = setInterval(redLight.style.background = "#E11218",1000);

var ACL = 1;
var ACB = 1;
var ACR = 1;
var ACT = 1;


// Signal Left
function leftSignal() {
    // The data/time we want to countdown to
    var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var seconds = Math.floor((timeleft % (1000 *10)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("s1Count").innerHTML = seconds;
        
    // Display the message when countdown is over
    if (seconds < 0) {
        clearInterval(myfunc);
        document.getElementById("s1count").innerHTML = "";
       
    }
    }, 1000);
    
    const l1 = SignalLeft.querySelector(".l1");
    const l2 = SignalLeft.querySelector(".l2");
    const l3 = SignalLeft.querySelector(".l3");

    l1.style.background = "#fff";
    l2.style.background = "#fff";
    l3.style.background = "#fff";
    if (ACL === 1) {
      var a=setInterval(() => {
        l1.style.background = "#E11218";
        ACL = 2;
      }, myfunc); 
      
      
    } else if (ACL === 2) {
      l2.style.background = "#FFFF00";
      ACL = 3;
    } else if (ACL === 3) {
      l3.style.background = "#358A22";
      ACL = 1;
    }
    
}

// function buttomSignal(){

//      //Signal Bottom
   
//     let b1 = SignalBottom.querySelector(".b1");
//     let b2 = SignalBottom.querySelector(".b2");
//     let b3 = SignalBottom.querySelector(".b3");
//     b1.style.background = "#fff";
//     b2.style.background = "#fff";
//     b3.style.background = "#fff";
//     if (ACB == 1) {
//       b1.style.background = "#E11218";
//       ACB = 2;
//     } else if (ACB == 2) {
//       b2.style.background = "#FFFF00";
//       ACB = 3;
//     } else if (ACB == 3) {
//       b3.style.background = "#358A22";
//       ACB = 1;
      
//     }
  
// }

// function rightSignal(){
            
//     let r1 = SignalRight.querySelector(".r1");
//     let r2 = SignalRight.querySelector(".r2");
//     let r3 = SignalRight.querySelector(".r3");
//     r1.style.background = "#fff";
//     r2.style.background = "#fff";
//     r3.style.background = "#fff";
//     if (ACR == 1)
//     {
//         r1.style.background = "#E11218";
//         ACR = 2;
//     } 
//     else if (ACR == 2) 
//     {
//         r2.style.background = "#FFFF00";
//         ACR = 3;
//     } 
//     else if (ACR == 3) 
//     {
//         r3.style.background = "#358A22";
//         ACR = 1;
//     }

// }

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


document.onload = leftSignal();
// document.onload = setInterval(buttomSignal, 2000);
// document.onload = setInterval(rightSignal, 3000);
// document.onload = setInterval(topSignal, 4000);


// The data/time we want to countdown to
    // var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

    // // Run myfunc every second
    // var myfunc = setInterval(function() {

    // var now = new Date().getTime();
    // var timeleft = countDownDate - now;
    // var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // // Result is output to the specific element
    // document.getElementById("s1Count").innerHTML = seconds;
        
    // // Display the message when countdown is over
    // if (timeleft < 0) {
    //     clearInterval(myfunc);
    //     document.getElementById("s1count").innerHTML = "";
    // }
    // }, 1000);





