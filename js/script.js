var priceForKM = 0.21;
var underAgeDiscount = 0.2;
var seniorAgeDiscount = 0.4;
var generateEl = document.getElementById("generate");
var undoEl = document.getElementById("undo");


// Generate Function
generateEl.addEventListener('click',
  function () {
    var name = document.getElementById("name").value;
    var tripKm = document.getElementById("kmToRun").value;
    var age = document.getElementById("age").value;
    var finalPrice = tripKm * priceForKM;


    if (age == "Minorenne") {
      finalPrice = finalPrice - (finalPrice * underAgeDiscount)
    } else if (age == "Adulto") {
    } else if (age == "Over65") {
      finalPrice = finalPrice - (finalPrice * seniorAgeDiscount)
    }

    document.getElementById("nameResume").innerHTML = name;
    document.getElementById("offerta").innerHTML = age;
    document.getElementById("carrozza").innerHTML= Math.floor(Math.random() * (16 - 1)) + 1; 
    document.getElementById("cpCode").innerHTML= Math.floor(Math.random() * (10000 - 9000)) + 9000; 
    document.getElementById("price").innerHTML = finalPrice + " €"

  }
  )

  // Undo Function
  undoEl.addEventListener("click",
  function(){
    document.getElementById('name').value = "";
    document.getElementById('kmToRun').value = "";
    document.getElementById('age').value = "Minorenne"
  }
  )