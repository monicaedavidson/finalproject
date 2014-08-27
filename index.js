// alert('JS Loaded!');

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

var Grocery = function(name, category) {
  this.name = name,
  this.category = category,

  itemList.push(this.name);
  categoryList.push(this.category);

  this.whichDivID = (function() {
    alert("This.category is: " + this.category);
    switch (this.category) {
      case "dairy":
        return "#dairyList";
        break;
      case "bakery":
        return "#bakeryList";
        break;
      case "meat":
        return "#meatList";
        break;
      case "seafood":
        return "#seafoodList";
        break;
      case "dryGoods":
        return "#dryGoodsList";
        break;
      case "produce":
        return "#produceList";
        break;
      case "beverages":
        return "#beveragesList";
        break;
      case "personalItems":
        return "#personalItemsList";
        break;
      default:
        return "BLAAAAAAAH";
    };
  })(),

  this.addToList = (function() {
    alert("This.whichDivID is: " + this.whichDivID);
    $(this.whichDivID).append('<p class="nestled">Variable worked</p>');
  })()
}

//On button click, grabs values from input fields,
//creates Ojects and inserts into DOM
$('#addButton').click(function() {
  var itemName = $("#itemNameID").val();
  var catName = $("#categoryNameID").val();
  Grocery(itemName, catName);
  alert("itemName and catName are: " + itemName + " " + catName);
  // alert(itemList);
  // alert(categoryList);
});

$(function() {
  $("#groceryList").accordion();
});

//taken from devbridge guide to autocomplete
var a = $('#itemNameID').autocomplete({

  // callback function:
  //onSelect: function(value, data){ alert('You selected: ' + value + ', ' + data); },
  // local autosugest options:
  lookup: ["Milk", "Eggs", "Butter", "Cheese", "Ice Cream",
  "Sour Cream", "Yogurt", "Cream Cheese", "Cottage Cheese", "Cream",
  "Half and Half", "Creamer", "Bagels", "Bread", "Brownies", "Cake", "Cookies",
  "Croissants", "Cupcakes", "Doughnuts", "Muffins", "Pie", "Bacon", "Beef", "Chicken", "Duck", "Goat", "Donkey",
  "Horse", "Hot Dogs", "Pigeon", "Pork", "Turkey", "Veal", "Catfish", "Clams", "Crab", "Lobster", "Oysters",
  "Prawns", "Salmon", "Shrimp", "Apple", "Apricot", "Asparagus", "Avocado", "Banana",
  "Blueberries", "Broccoli", "Cabbage", "Carrot",
  "Cauliflower", "Celery", "Cherries", "Coconut",
  "Corn", "Cucumber", "Grapes", "Kiwi", "Lemon",
  "Mushrooms", "Onion", "Orange", "Peach", "Pepper",
  "Pineapple", "Potato", "Raspberries", "Spinach", "Strawberries",
  "Tomato", "Watermelon", "Beans", "Candy", "Cereal", "Chips", "Chocolate",
  "Crackers", "Jerky", "Nuts", "Oreos", "Pasta", "Popcorn", "Pretzels",
  "Rice Cake", "Soup", "Trail Mix", "Canned Soup", "Twinkies", "Beer", "Cocoa", "Coffee", "Coke", "Juice",
  "Liquor", "Booze", "Pepsi", "Soda", "Tea", "Water", "Wine", "Aspirin", "Body Wash", "Brush", "Conditioner",
  "Condoms", "Deodorant", "Diapers", "Face Wash", "Floss", "Lotion",
  "Makeup", "Moisturizer", "Q-tips", "Shampoo", "Sunscreen", "Toothbrush",
  "Toothpaste", "Vitamins"] //local lookup values
});
