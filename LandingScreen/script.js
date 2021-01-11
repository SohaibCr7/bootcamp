// top banner script
var slideIndex = 0;
        showSlides();
        
        function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 2000); // Change image every 2 seconds
        }



// function show1(){
//     document.getElementById('First-Container').style.display ='block';
//     document.getElementById("Second-Container").style.display = 'none';
//   }
//   function show2(){
//     document.getElementById('First-Container').style.display = 'none';
//     document.getElementById("Second-Container").style.display = "block";
//   }