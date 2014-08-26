//Lists the items user has added to current grocery list
var itemList = [];
var categoryList = [];

//List of items available to choose by category
var dairyList = [
  "Milk", "Eggs", "Butter", "Cheese", "Ice Cream",
  "Sour Cream", "Yogurt", "Cream Cheese", "Cottage Cheese", "Cream",
  "Half and Half", "Creamer"];
var bakeryList = ["Bagels", "Bread", "Brownies", "Cake", "Cookies",
  "Croissants", "Cupcakes", "Doughnuts", "Muffins", "Pie"];
var meatList = ["Bacon", "Beef", "Chicken", "Duck", "Goat",
  "Horse", "Hot Dogs", "Pigeon", "Pork", "Turkey", "Veal", "Donkey"];
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

//List of all items available to choose
var listofAll = dairyList + bakeryList + meatList + seafoodList + produceList +
  dryGoodsList + beveragesList + personalItemsList;

//Dictionary linking items to respective categories
//Pseudocode:
//Iterate through each list using .each(). Key = item name, value = category
//Example:
//var listDic = {
//   "Milk" : "Dairy";
//   "Eggs" : "Dairy";
//}

// Autocomplete
// $("#itemNameID").autocomplete({
//   source: listofAll;
// });

var Grocery = function(name, category) {
  this.name = name,
  this.category = category,
  itemList.push(this.name);
  categoryList.push(this.category);
  this.whichDivID = (function() {
    alert("Method!");
    switch (this.category) {
      case "Dairy":
        return "id='dairyList'";
        break;
      case "Bakery":
        return "id='bakeryList'";
        break;
      case "Meat":
        return "id='meatList'";
        break;
      case "Seafood":
        return "id='seafoodList'";
        break;
      case "Dry Goods":
        return "id='dryGoodsList'";
        break;
      case "Produce":
        return "id='produceList'";
        break;
      case "Beverages":
        return "id='beveragesList'";
        break;
      case "Personal Items":
        return "id='personalItemsList'";
        break;

    this.addToList = (function() {
      alert('')
      var $whichDiv = $("'#'" + this.whichDivID + "'");
      $whichDiv.append('<p>Test</p>');
    });
  };

  //Do not delete. IIFE.
  })();
};

//Pseudocode for adding a div
// $(category).append("<p class='newGroceryitem'>" stuff)


$('#addButton').click(function() {
  var itemName = $("#itemNameID").val();
  var catName = $("#categoryNameID").val();
  newListItem = new Grocery(itemName, catName);
  alert(itemName + " " + catName);
  alert(itemList);
  alert(categoryList);
});

$(function() {
  $("#groceryList").accordion();
});
