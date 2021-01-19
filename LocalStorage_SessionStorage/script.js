
// var price = document.getElementsByClassName(".price");
// var i=0;
var ProductList = document.getElementById("productsList");
window.onload = () => {
    renderProducts()
}
function renderProducts(){

   
    var pImg = document.createElement("img");
    pImg.setAttribute("src", "C:/Users/msohaib/Desktop/images.jpg");
    pImg.setAttribute("width", "200px");
    pImg.setAttribute("height", "200px");
    pImg.setAttribute("alt", "Shampu");
    ProductList.appendChild(pImg);

    var desc = document.createElement("p");
    var text = document.createTextNode("Sunsilk Shampu, This product is created by Pata Nahi");
    desc.appendChild(text);
    ProductList.appendChild(desc);

    var price = document.createElement("p");
    var value = document.createTextNode("Rs.30000");
    price.appendChild(value);
    ProductList.appendChild(price);

    
}

// () => {
//     getLocasstorge
//     update array 
//     setLocasstorge
// }


