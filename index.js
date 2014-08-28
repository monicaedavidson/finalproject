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
function List(categoryName, itemsInCategory) {
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

//List that contains all items designated with the value of their category
var masterCatDic = []

//populates the master list
$.each(rawCategoriesWithItems, function(category, items) {
  masterList.push(new List(category, items));
});

//list that contains all items individually
var allItems = [];

$.each(masterList, function(i, list) {
  allItems = allItems.concat(list.items);
});

//Creates a dictionary where keys are the items and the values are the categories
$.each(rawCategoriesWithItems, function(category, itemList) {
  $.each(itemList, function(index, item) {
    masterCatDic[item] = category;
  });
});

//Constructor to create grocery list items upon user selection
var Grocery = function(name, category) {
  this.name = name,
  this.category = category,

  currentGroceryList.push(this.name);
  currentCategoryList.push(this.category);

  //Inserts a DOM element into the grocery list area
  this.addToList = (function() {
    var cat = "#" + masterCatDic[User.itemNameVal()];
    alert("Cat = " + cat);
    $('#bakery').append('<p>' + this.name + '</p>');
  })()
}

//User input Object
var User = {
  itemNameVal: function() {
    var name = $('#itemNameID').val();
    return name;
  },

  catNameVal: function() {
    var cat = $('#categoryNameID').val();
    return cat;
  },

  //Checks if the item user typed in is in the current list of all
  //if the item is not in the list, it adds it
  isInListofAll: function() {
    var name = User.itemNameVal();
    if (allItems.indexOf(name) > -1) {
      return true;
    } else {
      allItems.push(User.itemNameVal);
      return false;
    }
  },

  // Auto-populates Category with hard-coded value or allows
  // user to select a category
  whichCatList: (function() {
    $('#itemNameID').focusout(function() {
      if (User.isInListofAll) {
        var cat = masterCatDic[User.itemNameVal()];
        $('#categoryNameID').val(cat);
        } else {
        return null;
        }
    });
  })(),
}

//Button object
var Button = {
  userClicked: (function() {
    $('#addButton').click(function() {
      var itemName = $("#itemNameID").val();
      var catName = $("#categoryNameID").val();
      new Grocery(itemName, catName);
    })
  })()
}

$(function() {
  $("#groceryList").accordion();
});

//taken from devbridge guide to autocomplete
var a = $('#itemNameID').autocomplete({
  lookup: allItems
});
