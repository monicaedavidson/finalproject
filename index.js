var itemList = [];
var categoryList = [];
var dairyList = [
  "Milk", "Eggs", "Butter", "Cheese", "Ice Cream",
  "Sour Cream", "Yogurt", "Cream Cheese", "Cottage Cheese", "Cream",
  "Half and Half", "Creamer"];
var bakeryList = ["Bagels", "Bread", "Brownies", "Cake", "Cookies",
  "Croissants", "Cupcakes", "Doughnuts", "Muffins", "Pie"];
var meatList = ["Bacon", "Beef", "Chicken", "Duck", "Goat",
  "Horse", "Hot Dogs", "Pigeon", "Pork", "Turkey", "Veal"];
var seafoodList = ["Catfish", "Clams", "Crab", "Lobster", "Oysters",
  "Prawns", "Salmon", "Shrimp"];
var produceList = [
  "Apple", "Apricot", "Asparagus", "Avocado", "Banana",
  "Blueberries", "Broccoli", "Cabbage", "Carrot",
  "Cauliflower", "Celery", "Cherries", "Coconut",
  "Corn", "Cucumber", "Grapes", "Kiwi", "Lemon",
  "Mushrooms", "Onion", "Orange", "Peach", "Pepper",
  "Pineapple", "Potato", "Raspberries", "Spinach", "Strawberries",
  "Tomato", "Watermelon"
  ];
var dryGoodsList = ["Beans", "Candy", "Cereal", "Chips", "Chocolate",
  "Crackers", "Jerky", "Nuts", "Oreos", "Pasta", "Popcorn", "Pretzels",
  "Rice Cake", "Soup", "Trail Mix", "Canned Soup", "Twinkies"];
var beveragesList = ["Beer", "Cocoa", "Coffee", "Coke", "Juice",
  "Liquor", "Booze", "Pepsi", "Soda", "Tea", "Water", "Wine"];
var personalItemsList = ["Aspirin", "Body Wash", "Brush", "Conditioner",
  "Condoms", "Deodorant", "Diapers", "Face Wash", "Floss", "Lotion",
  "Makeup", "Moisturizer", "Q-tips", "Shampoo", "Sunscreen", "Toothbrush",
  "Toothpaste", "Vitamins"];
var listofAll = dairyList + bakeryList + meatList + seafoodList + produceList +
  dryGoodsList + beveragesList + personalItemsList;
alert(listofAll);

//Autocomplete
// $("#itemNameID").autocomplete({
//   source: listofAll;
// });

var Grocery = function(name, category) {
  this.name = name,
  this.category = category,
  itemList.push(this.name);
  categoryList.push(this.category);
<<<<<<< HEAD
=======
  this.addToList = (function() {
    alert("Method!");
    switch (this.category) {
      case "Dairy":
        return "id='dairyList'";
        break;
      case "Bakery":
        alert("U choze Bakery");
        break;
      case "Meat":
        alert("Meat");
        break;
      case "Seafood":
        alert("Seafood");
        break;
      case "Dry Goods":
        alert("Dry Goods");
        break;
      case "Produce":
        alert("Produce");
        break;
      case "Beverages":
        alert("Beverages");
        break;
      case "Personal Items":
        alert("Personal Items");
        break;
    };

  //Do not delete. IIFE.
  })();
>>>>>>> 8764c20fd15129f58374c61616ab7f14ec0cd95d
};

//Pseudocode for adding a div
// $(category).append("<p class='newGroceryitem'>" stuff)

<<<<<<< HEAD
// $('button').on('click', function() {
//   var newItem = $('.newItemBox').val();
//   var selectCategory = $('#categoryNameID').val();
//   var newCategory = $('.newCategory').val();
//   // Grocery(newItem, newCategory);
//   alert(newItem);
//   alert(selectCategory);
//   alert(newCategory);
//   alert(listofAll);
//   alert(itemList);
//   alert(categoryList);

// });

$("#addButton").click(function() {
  $("#newCategory").append("<p class='newGrocerycategory'>" + $("#categoryNameID").val() + "</p>");
  $("#newList").append("<p class='newGroceryitem'>" + $("#itemNameID").val() + "</p>");
=======

$('#addButton').click(function() {
  var itemName = $("#itemNameID").val();
  var catName = $("#categoryNameID").val();
  newListItem = new Grocery(itemName, catName);
  alert(itemName + " " + catName);
  alert(itemList);
  alert(categoryList);
>>>>>>> 8764c20fd15129f58374c61616ab7f14ec0cd95d
});

$(function() {
  $("#groceryList").accordion();
});
