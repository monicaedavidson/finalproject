//Lists the items user has added to current grocery list
var currentGroceryList = [];
var currentCategoryList = [];

//raw data of items
rawCategoriesWithItems = {
  dairy: [
  "Milk", "Eggs", "Butter", "Cheese", "Ice Cream",
  "Sour Cream", "Yogurt", "Cream Cheese", "Cottage Cheese", "Cream",
  "Half and Half", "Creamer"],
  bakery: ["Bagels", "Bread", "Brownies", "Cake", "Cookies",
  "Croissants", "Cupcakes", "Doughnuts", "Muffins", "Pie"],
  meat: ["Bacon", "Beef", "Chicken", "Duck", "Goat",
  "Horse", "Hot Dogs", "Pigeon", "Pork", "Turkey", "Veal", "Donkey"],
  seafood: ["Catfish", "Clams", "Crab", "Lobster", "Oysters",
  "Prawns", "Salmon", "Shrimp"],
  produce: [
  "Apple", "Apricot", "Asparagus", "Avocado", "Banana",
  "Blueberries", "Broccoli", "Cabbage", "Carrot",
  "Cauliflower", "Celery", "Cherries", "Coconut",
  "Corn", "Cucumber", "Grapes", "Kiwi", "Lemon",
  "Mushrooms", "Onion", "Orange", "Peach", "Pepper",
  "Pineapple", "Potato", "Raspberries", "Spinach", "Strawberries",
  "Tomato", "Watermelon"
  ],
  dryGoods: ["Beans", "Candy", "Cereal", "Chips", "Chocolate",
  "Crackers", "Jerky", "Nuts", "Oreos", "Pasta", "Popcorn", "Pretzels",
  "Rice Cake", "Soup", "Trail Mix", "Canned Soup", "Twinkies"],
  beverages: ["Beer", "Cocoa", "Coffee", "Coke", "Juice",
  "Liquor", "Booze", "Pepsi", "Soda", "Tea", "Water", "Wine"],
  personalItems: ["Aspirin", "Body Wash", "Brush", "Conditioner",
  "Condoms", "Deodorant", "Diapers", "Face Wash", "Floss", "Lotion",
  "Makeup", "Moisturizer", "Q-tips", "Shampoo", "Sunscreen", "Toothbrush",
  "Toothpaste", "Vitamins"],
};

//list constructor function
function List (categoryName, itemsInCategory) {
  this.name = categoryName;
  this.items = itemsInCategory;
  //method to determine if inputted item is in this specific list
  this.hasItem = function (item) {
    if (this.items.indexOf(item) > -1) {
      return true;
    } else {
      return false;
    }
  }
};

//list that contains lists all of the categories with their respective items
var masterList = [];

//populates the master list
$.each(rawCategoriesWithItems, function(category, items) {
  masterList.push(new List(category, items));
});

//list that contains all items individually
var allItems = [];
$.each(masterList, function(i, list) {
  allItems = allItems.concat(list.items);
});

//Constructor to create grocery list items upon user selection
var Grocery = function(name, category) {
  this.name = name,
  this.category = category,

  currentGroceryList.push(this.name);
  currentCategoryList.push(this.category);

  //Inserts a DOM element into the grocery list area
  this.addToList = (function() {
    $(this.whichDivID(this.category)).append('<p class="nestled">' + this.name + '</p>');
  })()
}

//User entry Object
var UserInput = {
  itemNameVal: $('#itemNameID').val(),

  //Checks if the item user typed in is in the current list of all
  //if the item is not in the list, it adds it
  isInListofAll: (function() {
    $('#itemNameID').focusout(function() {
      if (allItems.indexOf(this.itemNameVal) > -1) {
        return true;
      } else {
        allItems.push(this.itemNameVal);
      };
    })
  })(),

  //Auto-populates Category with hard-coded value or allows
  //user to select a category

  // whichCatList: (function() {
  //   var catNameVal = $('#categoryNameID').val();
  //   var userInputCat = "";
  //   $('#itemNameID').focusout(function() {
  //     if (this.isInListofAll) {
  //       $.each(masterList, function(index, catNameVal) {
  //         alert("userInputCat is: " + catNameVal);
  //         userInputCat = "blah";
  //       })
  //     } else {
  //       return null;
  //     }
  //   })
  // })()
}

//Button object
var Button = {
  userClicked: (function() {
    $('#addButton').click(function() {
      var itemName = $("#itemNameID").val();
      var catName = $("#categoryNameID").val();
      new Grocery(itemName, catName);
      // alert(currentGroceryList);
      // alert(currentCategoryList);
    })
  })()
}

$(function() {
  $("#groceryList").accordion();
});

//taken from devbridge guide to autocomplete
var a = $('#itemNameID').autocomplete({
  // callback function:
  //onSelect: function(value, data){ alert('You selected: ' + value + ', ' + data); },
  // local autosuggest options:
  lookup: allItems
});
