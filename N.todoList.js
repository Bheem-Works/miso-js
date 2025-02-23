// let's go
// making a variable to store the id

var form = document.getElementById("addForm");
var itemsLi = document.getElementById("items");

// adding a event listener
form.addEventListener("click", addItem);

// creating a function of add Items
function addItem(e) {
  e.preventDefault();

  // take input value;
  var input = document.getElementById("item").value;
  // creating a elements;
  var li = document.createElement("li");
  // adding a class;
  li.className = "list-group-item";

  li.appendChild(document.createTextNode(input));

  itemsLi.appendChild(li);
}
 