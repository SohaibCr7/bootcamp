function enterkey()
{
    var input = document.getElementById("value1");
    input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
    
  }
});
}


function Addlist() {
    var a = document.getElementById("value1").value;
    var table = document.getElementById("table1");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = a;
    document.getElementById("value1").value = "";
  }

