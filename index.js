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

var Grocery = function(name, category) {
  this.name = name,
  this.category = category,

  currentGroceryList.push(this.name);
  currentCategoryList.push(this.category);

  // this.whichDivID = (function() {
  //   alert("this.category is: " + this.category);
  //   switch (this.category) {
  //     case "dairy":
  //       return "#dairyList";
  //       break;
  //     case "bakery":
  //       return "#bakeryList";
  //       break;
  //     case "meat":
  //       return "#meatList";
  //       break;
  //     case "seafood":
  //       return "#seafoodList";
  //       break;
  //     case "dryGoods":
  //       return "#dryGoodsList";
  //       break;
  //     case "produce":
  //       return "#produceList";
  //       break;
  //     case "beverages":
  //       return "#beveragesList";
  //       break;
  //     case "personalItems":
  //       return "#personalItemsList";
  //       break;
  //     default:
  //       return "BLAAAAAAAH";
  //   };
  // }),

  this.addToList = (function() {
    $(this.whichDivID).append('<p class="nestled">' + this.name + '</p>');
  })()
}

//User entry Object
var UserInput = {
  findCategory: (function() {
    $('#itemNameID').focusout(function() {
      var itemName = $("#itemNameID").val();
      if (allItems.indexOf(itemName) > -1) {
        alert("Trueness");
        return true
      };
    // alert(allItems.indexOf(itemName));
    })
  })()
}

//   $('#itemNameID').focusout(function() {
//   var itemName = $("#itemNameID").val();
//   if ($.inArray(itemName, dairyList) > -1) {
//     $('#categoryNameID').val("dairy");
//   } else if ($.inArray(itemName, bakeryList) > -1) {
//    $('#categoryNameID').val("bakery");
//   } else if ($.inArray(itemName, meatList) > -1) {
//     $('#categoryNameID').val("meat");
//   } else if ($.inArray(itemName, seafoodList) > -1) {
//    $('#categoryNameID').val("seafood");
//   } else if ($.inArray(itemName, dryGoodsList) > -1) {
//     $('#categoryNameID').val("dryGoods");
//   } else if ($.inArray(itemName, produceList) > -1) {
//     $('#categoryNameID').val("produce");
//   } else if ($.inArray(itemName, beveragesList) > -1) {
//     $('#categoryNameID').val("beverages");
//   } else if ($.inArray(itemName, personalItemsList) > -1) {
//     $('#categoryNameID').val("personalItems");
//   } else {
//     $('#categoryNameID').val(null);
//   }
// )});
// }

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
