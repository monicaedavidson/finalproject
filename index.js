//constructor function
var itemList = [];
var categoryList = [];
var listofAll = [];

var Grocery = function(name, category) {
  this.name = name,
  this.category = category,
  listofAll.push(this);
  itemList.push(this.name);
  categoryList.push(this.category);
}

var milk = new Grocery("milk", "dairy");
var eggs = new Grocery("eggs", "meat");

//Autofocus cursor to input field on page load
// $('.newItemBox').focus();




// console.log(listofAll);
// console.log(itemList);
// console.log(categoryList);
