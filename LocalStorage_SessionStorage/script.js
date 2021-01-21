function Save() {
  // Getting New Data From Button Click
  var new_dataImg = document.getElementById("I");
  new_dataImg.setAttribute("src", "C:/Users/msohaib/Desktop/images.jpg");
  var new_dataDesc = document.getElementById("desc");
  var new_dataPrice = document.getElementById("price");
  // console.log(new_dataImg);

  var allData = {
    myImage: new_dataImg.getAttribute("src"),
    myDesc: new_dataDesc.innerHTML,
    myPrice: new_dataPrice.innerHTML,
  };

  // TO save the data in Array when empty
  if (localStorage.getItem("product") == null) {
    localStorage.setItem("product", "[]");
  }

  // Old Data Swap with New Data
  var old_data = JSON.parse(localStorage.getItem("product"));
  old_data.push(allData);

  // Save the old data with new data in local storage.
  localStorage.setItem("product", JSON.stringify(old_data));
}
// document.onload = View();
function View() {
  // IF data is exeist then show in div.
  if (localStorage.getItem("product") != null) {
    
    var localValues = JSON.parse(localStorage.getItem("product"));
    var data_div = document.getElementById("productsList");

    // var h1Element = document.createElement('h1');
      // var Node = document.createTextNode(JSON.parse(localStorage.getItem('product')));

      // h1Element.appendChild(Node);
      // data_div.appendChild(h1Element);
    for (let i = 0; i < localValues.length; i++) {
      
      var pImg = document.createElement("img");

      pImg.setAttribute("src", localValues[i].myImage);
      data_div.appendChild(pImg);

      var desc = document.createElement("p");
      var text = document.createTextNode(localValues[i].myDesc);
      desc.appendChild(text);
      data_div.appendChild(desc);
      // document.getElementById("d").innerHTML = localValues.Desc;

      var price = document.createElement("p");
      var pText = document.createTextNode(localValues[i].myPrice);
      price.appendChild(pText);
      data_div.appendChild(price);
    }
  }
  else{
    alert("Items in Product List is not added");
}
}

function ItemQuantity(){
    let count=0;
    var qty = document.querySelectorAll('select');
    console.log(qty);

    var localValues = JSON.parse(localStorage.getItem("product"));
    // for(var i = 0; i < localStorage.product.length; i++){
    //     console.log(i);
    //   }

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.key(key)}`);
      }
    

}
window.onload = ItemQuantity()
