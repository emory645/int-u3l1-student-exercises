// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place  = "Home"
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName = "lion"
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color = "blue"
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2 = "black"
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion = "happy"
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character = "spiderman"
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number = "4"
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item = "table"
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2 = "cup"
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb = "run"
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb = "does"
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2 = "5"





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "Home";
    document.querySelector(".creature-name").innerHTML = "lion";
    document.querySelector(".color").innerHTML = "blue";
    document.querySelector(".color-2").innerHTML = "black";
    document.querySelector(".emotion").innerHTML = "happy";
    document.querySelector(".character").innerHTML = "spiderman";
    document.querySelector(".creature-name-again").innerHTML = "lion";
    document.querySelector(".number").innerHTML = "4";
    document.querySelector(".item").innerHTML = "table";
    document.querySelector(".character-again").innerHTML = "spiderman";
    document.querySelector(".item-2").innerHTML = "cup";
    document.querySelector(".verb").innerHTML = "run";
    document.querySelector(".adverb").innerHTML = "does";
    document.querySelector(".number-2").innerHTML = "5";
    document.querySelector(".story-container").style = "display:block";
});
