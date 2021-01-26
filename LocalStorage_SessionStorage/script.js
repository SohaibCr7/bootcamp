let newArray = [];
function view() {
  // Objects of Products In Array
  var productsList = document.getElementById("productsList");
  const x = [
    {
      Pimg: "C:/Users/msohaib/Desktop/images.jpg",
      Desc: "Sunsilk Shampu, This product is created by Pata Nahi",
      Price: "Rs.30000",
    },
    {
      Pimg: "C:/Users/msohaib/Desktop/maggi.png",
      Desc: "Maggiiiiiiiiiii Packet",
      Price: "Rs.10000",
    },
  ];

  //Loop to add products in Second Dive
  for (let index = 0; index < x.length; index++) {
    const element = x[index];
    // console.log(index, element);

    // Creating Div for Products
    var Product_Div = document.createElement("div");
    Product_Div.setAttribute("class", "products");

    // Creating Image Tag For product Image
    var pImg = document.createElement("img");
    pImg.setAttribute("src", element.Pimg);
    pImg.setAttribute("width", "200px");
    pImg.setAttribute("height", "150px");
    Product_Div.appendChild(pImg);

    // Creating Text Node of products
    var my_Name = document.createTextNode(element.Desc);
    Product_Div.appendChild(my_Name);

    // Creating text Node for Price
    var my_Price = document.createTextNode(element.Price);
    Product_Div.appendChild(my_Price);

    // 1. Create the button
    var button = document.createElement("button");

    button.innerHTML = "Add TO Card";
    button.setAttribute("class", "btn");
    button.setAttribute("onclick", `AddToCard(${index});`);
    Product_Div.appendChild(button);

    // Appending Both Divs In paren Div
    productsList.appendChild(Product_Div);
  }
  // Creating anchor Tag
  var aTag = document.createElement("a");
  aTag.innerHTML = "Check Out";
  aTag.setAttribute("href", "products.html");
  aTag.setAttribute("onclick", "CheckOut();");
  aTag.setAttribute("class", "CheckOut");
  Product_Div.appendChild(aTag);
}

function CheckOut(index) {
      
        alert("Thank You For Shopping.....!");
        localStorage.setItem(`products`, JSON.stringify(newArray));

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

function AddToCard(index) {
  console.log("index", index);

  if (localStorage == null) {
    newArray = [];
  }
  var my_Products = [
    {
      Pimg: "C:/Users/msohaib/Desktop/images.jpg",
      Desc: "Sunsilk Shampu, This product is created by Pata Nahi",
      Price: "Rs.30000",
    },
    {
      Pimg: "C:/Users/msohaib/Desktop/maggi.png",
      Desc: "Maggiiiiiiiiiii Packet",
      Price: "Rs.10000",
    },
  ];

if(my_Products[index] != my_Products){
  newArray.push(my_Products[index]);
  alert("New Peoduct Added");
}
else{
    alert("This Product Is Already Added in your Card");
}
}

window.onload = () => {
  view();
};
