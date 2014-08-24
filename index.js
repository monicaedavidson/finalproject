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

// $('button').click(function(onclick) {
//   alert("clicked");
  // var newItem = $('.newItemBox').val();
  // var newCategory = $('.newCategory').val();
  // // Grocery(newItem, newCategory);
  // alert(newItem);
  // alert(newCategory);
  // alert(listofAll);
  // alert(itemList);
  // alert(categoryList);

});

