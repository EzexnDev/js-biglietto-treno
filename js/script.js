
var priceForKM = 0.21;

var underAgeDiscount = 0.2;
var seniorAgeDiscount = 0.4;

var generateEl = document.getElementById("generate");
var undoEl = document.getElementById("undo");

generateEl.addEventListener('click',
  function() {
var tripKm = document.getElementById("kmToRun").value;
var age = document.getElementById("age").value;
console.log(age)
console.log(tripKm)
var finalPrice = tripKm * priceForKM;
  if (age = "Minorenne") {
    finalPrice = finalPrice - (finalPrice * underAgeDiscount)
    document.getElementById("finalPrice").innerHTML = finalPrice + " €"
    console.log("ao")
} else if (age = "Adulto") {
    document.getElementById("finalPrice").innerHTML = finalPrice + " €"
    console.log("ae")
} else if (age = "Over65"){
    finalPrice = finalPrice - (finalPrice * seniorAgeDiscount)
    document.getElementById("finalPrice").innerHTML = finalPrice + " €"
    console.log("ababab")
}
})




