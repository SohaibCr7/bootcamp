function view() {
  var data_div = document.getElementById("productsList");
  let localValues;
  let k = JSON.parse(localStorage.getItem("products"));
  let sum=0;
  

  for (let i = 0; i < k.length; i++) {
    // calling Local Values
    localValues = JSON.parse(localStorage.getItem(`products`));
   console.log(localValues[i].Price)
    // Creating Image Tag and save the local value in Image Tag
    var pImg = document.createElement("img");
    pImg.setAttribute("src", localValues[i].Pimg);
    data_div.appendChild(pImg);

    // Create Text Node and Save Image Descripton in Node
    var desc = document.createElement("p");
    var text = document.createTextNode(localValues[i].Desc);
    desc.appendChild(text);
    data_div.appendChild(desc);

    // Create Text Node and Save Image Price in Node
    var price = document.createElement("p");
    price.setAttribute("id", "price");
    var pText = document.createTextNode(localValues[i].Price);
    price.appendChild(pText);
    data_div.appendChild(price);

    // Adding Total Values
    sum+= parseInt(localValues[i].Price.substring(3));
    document.getElementById("totalPrice").innerHTML = `Total Price = ${sum}`;
  }

  // Quantity of Items
  document.getElementById("select").innerHTML = `Total Items = ${k.length}`;
  
}

window.onload = () => {
  view();
};
