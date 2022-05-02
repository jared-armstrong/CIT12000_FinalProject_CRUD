const foodItems = [
  {
    foodName: "Pizza", 
    calories: 800, 
    price: 10.00
  },
  {
    foodName: "Chicken",
    calories: 400,
    price: 6.00
  },
  {
    foodName: "Burger",
    calories: 350, 
    price: 5.00
  },
  {
    foodName: "Fries",
    calories: 200,
    price: 2.50
  },
  {
    foodName: "Salad",
    calories: 110,
    price: 2.00
  }
];


const act = () => {
  let action = document.querySelector("#choice").value;
  let foodInQuestion;
  switch (action) {
    case "C":
         createMenuItem();
         break;
      case "R":
         readItem();
         break;
      case "U":
         foodInQuestion = findMenuItem();
         alert(foodInQuestion);
         console.log(foodInQuestion);
         updateMenuItem(foodInQuestion);
         break;
      case "D":
         deleteMenuItem();
         break;
  }
};


const setMenuInfo = () => {
  let name = foodItems.foodName;
  let cals = foodItems.calories;
  let cost = foodItems.price;
}


const createMenuItem = () => {
  setMenuInfo(null);
  let name = prompt("Enter Menu Item Name: ");
  let cals = prompt("Enter Item Calories: ");
  let cost = prompt("Price of Menu Item: ");
  
  foodItems.push({
    foodName: name,
    calories: parseFloat(cals),
    price: parseFloat(cost)
  })
  listMenuItems();
  console.log(foodItems);
};


const listMenuItems = () => {
      let showFood = document.querySelector(".myList");
      let foodList = `<ul>`;
      foodItems.forEach((item) => {
      foodList += `<li>${item.foodName}</li>`;
  });
  foodList += `</ul>`;

  showFood.innerHTML = foodList;
};

const readItem = () => {
  let userInput = prompt("Enter the item you would like to find: ");
  let item = foodItems.find((item) => {
      if (item.foodName == userInput) {
        alert("Our " + item.foodName + " has " + item.calories + " calories and costs $" + item.price);
        console.log(item);
        return(item);
      } else {
        alert("Sorry we do not have that item on the menu!");
        return(null);
      }
  }
  )
};


const findMenuItem = () => {
  let userInput = prompt("Choose the menu item you would like to update: ");
  let item = foodItems.find((item) => {
      if (item.foodName == userInput) {
        let name = prompt("Name of item: ");
        let cals = prompt("Number of calories: ");
        let cost = prompt("Price of item: ");
        
        item.foodName = name;
        item.calories = cals;
        item.price = cost;
        
        return("Item update success");

      } else {
        alert("Please choose a valid item to update!");
      }
  })
};


const deleteMenuItem = () => {
  let userInput = prompt("Which item would you like to delete?");
      if (userInput == foodItems.foodName) {
        alert(foodItems.foodName);
    } else {
      return(null);
    }
};
