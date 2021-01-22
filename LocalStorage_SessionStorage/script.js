// function Save() {
//   // Getting New Data From Button Click
//   var new_dataImg = document.getElementById("I");
//   new_dataImg.setAttribute("src", "C:/Users/msohaib/Desktop/images.jpg");
//   var new_dataDesc = document.getElementById("desc");
//   var new_dataPrice = document.getElementById("price");
//   // console.log(new_dataImg);

//   var allData = {
//     myImage: new_dataImg.getAttribute("src"),
//     myDesc: new_dataDesc.innerHTML,
//     myPrice: new_dataPrice.innerHTML,
//   };

//   // TO save the data in Array when empty
//   if (localStorage.getItem("product") == null) {
//     localStorage.setItem("product", "[]");
//   }

//   // Old Data Swap with New Data
//   var old_data = JSON.parse(localStorage.getItem("product"));
//   old_data.push(allData);

//   // Save the old data with new data in local storage.
//   localStorage.setItem("product", JSON.stringify(old_data));
//   Quantity();
//   TotalPrice();

// }

// function Save() {
//   var pImg = document.getElementById("I");
//   var desc = document.getElementById("desc");
//   var price = document.getElementById("price");

//   var setTOLocal = {
//     Pimg: pImg.getAttribute("src"),
//     Desc: desc.innerHTML,
//     Price: price.innerHTML,
//   };
//   localStorage.setItem("Shampu", JSON.stringify(setTOLocal));
// }

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
    var Product_Div = document.createElement('div');
    Product_Div.setAttribute('class','products');

    // Creating Image Tag For product Image
    var pImg = document.createElement("img");
    pImg.setAttribute("src", element.Pimg);
    pImg.setAttribute('width','200px');
    pImg.setAttribute('height','150px');
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
    button.setAttribute('class','btn')
    button.setAttribute('onclick','AddToCard();');
    Product_Div.appendChild(button);


    // Appending Both Divs In paren Div
    productsList.appendChild(Product_Div);
  }
}


function AddToCard(){

   
    const my_Products = [
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

      for (let index = 0; index < my_Products.length; index++) {
        const element = my_Products[index];
        console.log(index, element);
      }

    //   if(index == index)
    //   {
    //       alert("Product is already Added.")
    //   }
    //   else{
    //       var 
    //   }
   
     
//   Save the old data with new data in local storage.
//   localStorage.setItem("products", JSON.stringify(my_Products));
}


window.onload = () => {
    view();
  };





//   pImg.setAttribute("width", "200px");
//   pImg.setAttribute("height", "200px");
//   pImg.setAttribute("alt", "Shampu");
//   productsList.appendChild(pImg);

//   // pushing Description
//   var desc = document.createElement("p");
//   var text = document.createTextNode(
//     "Sunsilk Shampu, This product is created by Pata Nahi"
//   );
//   desc.appendChild(text);
//   productsList.appendChild(desc);

//   //Pushing price
//   var price = document.createElement("p");
//   var value = document.createTextNode("Rs.30000");
//   price.appendChild(value);
//   productsList.appendChild(price);

//   var setTOLocal = {
//     Pimg: pImg.getAttribute("src"),
//     Desc: desc.innerHTML,
//     Price: price.innerHTML,
//   };

//   // Socond Product
//   var pImg = document.createElement("img");
//   pImg.setAttribute("src", "C:/Users/msohaib/Desktop/maggi.png");
//   pImg.setAttribute("width", "200px");
//   pImg.setAttribute("height", "200px");
//   pImg.setAttribute("alt", "Shampu");
//   productsList.appendChild(pImg);

//   // pushing Description
//   var desc = document.createElement("p");
//   var text = document.createTextNode(
//     "Sunsilk Shampu, This product is created by Pata Nahi"
//   );
//   desc.appendChild(text);
//   productsList.appendChild(desc);

//   //Pushing price
//   var price = document.createElement("p");
//   var value = document.createTextNode("Rs.30000");
//   price.appendChild(value);
//   productsList.appendChild(price);




// function View() {
// IF data is exeist then show in div.

// var setTOLocal ={
//     Pimg: pImg.getAttribute("src"),
//     Desc:desc.innerHTML,
//     Price: price.innerHTML
// }

//   if (localStorage.getItem("product") != null) {
//     var localValues = JSON.parse(localStorage.getItem("product"));
//     var data_div = document.getElementById("productsList");

//     // var h1Element = document.createElement('h1');
//     // var Node = document.createTextNode(JSON.parse(localStorage.getItem('product')));

//     // h1Element.appendChild(Node);
//     // data_div.appendChild(h1Element);
//     for (let i = 0; i < localValues.length; i++) {
//       var pImg = document.createElement("img");

//       pImg.setAttribute("src", localValues[i].myImage);
//       data_div.appendChild(pImg);

//       var desc = document.createElement("p");
//       var text = document.createTextNode(localValues[i].myDesc);
//       desc.appendChild(text);
//       data_div.appendChild(desc);
//       // document.getElementById("d").innerHTML = localValues.Desc;

//       var price = document.createElement("p");
//       var pText = document.createTextNode(localValues[i].myPrice);
//       price.appendChild(pText);
//       data_div.appendChild(price);

//     }
//   } else {
//     alert("Items in Product List is not added");
//   }
// }

// Total Price Work
// function TotalPrice() {
//   var localValues = JSON.parse(localStorage.getItem("product"));

//   var x = localValues.myPrice;
//   for (var i = 0; i < localValues.length + 1; i++) {
//     document.getElementById("totalPrice").innerHTML = "Price = " + i * 3000;
//   }
// }

//   Total Quantity Work
// function Quantity() {
//   var localValues = JSON.parse(localStorage.getItem("product"));
//   for (var i = 0; i < localValues.length + 1; i++) {
//     // console.log(i);
//     document.getElementById("select").innerHTML = "Total Items = " + i;
//   }
// }

// window.onload = () => {
//   Quantity();
//   TotalPrice();
// };
