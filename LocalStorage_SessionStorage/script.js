
// var price = document.getElementsByClassName(".price");
// var i=0;
var ProductList = document.getElementById("productsList");

function renderProduct1(){
    var pImg = document.createElement("img");
    pImg.setAttribute("src", "C:/Users/msohaib/Desktop/images.jpg");
    pImg.setAttribute("width", "200px");
    pImg.setAttribute("height", "200px");
    pImg.setAttribute("alt", "Shampu");
    ProductList.appendChild(pImg);
   
    // pushing Description
    var desc = document.createElement("p");
    var text = document.createTextNode("Sunsilk Shampu, This product is created by Pata Nahi");
    desc.appendChild(text);
    ProductList.appendChild(desc);
    
    //Pushing price 
    var price = document.createElement("p");
    var value = document.createTextNode("Rs.30000");
    price.appendChild(value);
    ProductList.appendChild(price);

    var btn = document.createElement("button");
    btn.setAttribute('onclick',"ClearLocalStorage();")
    btn.innerHTML = "Cancel Item";
    ProductList.appendChild(btn);
    // console.log(pImg.getAttribute("src"))
    // console.log(desc.innerHTML)
    
    var setTOLocal ={
        Pimg: pImg.getAttribute("src"),
        Desc:desc.innerHTML,
        Price: price.innerHTML
    }
   localStorage.setItem("image",JSON.stringify(setTOLocal));
}


function renderProduct2(){
    var pImg = document.createElement("img");
    pImg.setAttribute("src", "C:/Users/msohaib/Desktop/maggi.png");
    pImg.setAttribute("width", "200px");
    pImg.setAttribute("height", "200px");
    pImg.setAttribute("alt", "Shampu");
    ProductList.appendChild(pImg);
   
    // pushing Description
    var desc = document.createElement("p");
    var text = document.createTextNode("Maggi maggi maggi");
    desc.appendChild(text);
    ProductList.appendChild(desc);
    
    //Pushing price 
    var price = document.createElement("p");
    var value = document.createTextNode("Rs.30000");
    price.appendChild(value);
    ProductList.appendChild(price);

    var btn = document.createElement("button");
    btn.setAttribute('onclick',"ClearLocalStorage();")
    btn.innerHTML = "Cancel Item";
    ProductList.appendChild(btn);

    var setTOLocal ={
        Pimg: pImg.getAttribute("src"),
        Desc:desc.innerHTML,
        Price: price.innerHTML
    }
    localStorage.setItem("image2",JSON.stringify(setTOLocal));
   
   
}

// Local Storage Data Show karwana hai......!
var localData = document.getElementById("localData");
let obj = JSON.parse(localStorage.getItem("image"));
console.log(obj);
var ima = document.createElement("div");
ima.appendChild(obj);

localData.appendChild(ima);