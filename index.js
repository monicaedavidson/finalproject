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


// listofAll = [
//   new Grocery("milk", "dairy"),
//   new Grocery("butter", "dairy"),
//   new Grocery("eggs", "meat"),
//   new Grocery("shampoo", "personal care")
// ];

// for (key in listofAll) {
//   itemList.push(key);
//   console.log(key);
// }

// for (i = 0; i < itemList.length; i++) {
//     categoryList.push(itemList[i]);
//     console.log(itemList[i]);
// }

console.log(listofAll);
// console.log(itemList);
// console.log(categoryList);
