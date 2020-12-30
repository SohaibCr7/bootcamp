var redLight = document.querySelector(".l1");
var yellowLight = document.querySelector(".l2");
var greenLight = document.querySelector(".l3");

var SignalLeft = document.querySelector(".signal-body1");

// var intervalRed = setInterval(redLight.style.background = "#E11218",1000);
// var intervalYellow = setInterval(yellowLight.style.background = "#FFFF00",6000);
// var intervalGreen = setInterval(greenLight.style.background = "#358A22",9000);

var ACL = 1;

function changeLight() {
  setInterval(() => {
    const l1 = SignalLeft.querySelector(".l1");
    const l2 = SignalLeft.querySelector(".l2");
    const l3 = SignalLeft.querySelector(".l3");

    l1.style.background = "#fff";
    l2.style.background = "#fff";
    l3.style.background = "#fff";
    if (ACL === 1) {
      l1.style.background = "#E11218";
      ACL = 2;
    }
    else if (ACL === 2) {
      l2.style.background = "#FFFF00";
      ACL = 3;
    }
    else if (ACL === 3) {
      l3.style.background = "#358A22";
      ACL = 1;
    }
  }, 2000);
}

document.onload = changeLight();
