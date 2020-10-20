var tripKm = prompt("Quanti KM vuoi percorrere?")
var age = prompt("Quanti anni hai?")
var priceForKM = 0.21;
var finalPrice = tripKm * priceForKM;
var underAgeDiscount = 0.2;
var seniorAgeDiscount = 0.4;

console.log(finalPrice);

if(age<18){
 finalPrice = finalPrice - (finalPrice*underAgeDiscount)
 document.getElementById("finalPrice").innerHTML = finalPrice +" €"
} else if(age>=18 && age<65)
{
 document.getElementById("finalPrice").innerHTML = finalPrice +" €"
} else {
    finalPrice = finalPrice - (finalPrice * seniorAgeDiscount)
    document.getElementById("finalPrice").innerHTML = finalPrice +" €"
}