// 1)

const person = {
    age: 23,
    height: "201 cm",
    weight: 105
}

function listProperties(person) {
    for (const property in person) {
      console.log(`${property}: ${person[property]}`);
    }
}

// listProperties(person)

// 2)

function lengthOfObj (obj){
    return Object.keys(obj).length
}

// console.log(lengthOfObj(person));

// 3)

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 3.1)

const displayGroceries = () => {
    for (const i in groceries.fruits){
    console.log(groceries.fruits[i]);
}
}
// displayGroceries()

// 3.2 - 3.6)

function cloneGroceries () {
    let user = client
    client = "Betty"
    let shopping = groceries
    shopping.totalPrice = "35$"
    console.log(groceries.totalPrice);
    groceries.other.paid = false
}

cloneGroceries ()



