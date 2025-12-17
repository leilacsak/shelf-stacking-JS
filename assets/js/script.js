fruits = ["🍌", "🍏", "🍊", "🍌", "🍌", "🍏", "🍊", "🍏", "🍊", "🍊", "🍏", "🍌"];

const bananaShelf = document.getElementById("banana-shelf");
const orangeShelf = document.getElementById("orange-shelf"); 
const appleShelf = document.getElementById("apple-shelf");

function sortFruits() {
    for (let fruit of fruits) {
    if (fruit === "🍌") {
      bananaShelf.textContent += fruit;
    } else if (fruit === "🍊") {
      orangeShelf.textContent += fruit;
    } else if (fruit === "🍏") {
      appleShelf.textContent += fruit;
    }
  } 
}

sortFruits();

 

