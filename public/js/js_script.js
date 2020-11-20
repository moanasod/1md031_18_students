/*function MenuItem(nm, cal, gln, lcs) {
  this.itemName = nm;
  this.calorie = cal;
  this.gruten = gln;
  this.lactose = lcs;
  this.burger = function() {
    return this.itemName + ' ' + this.calorie;
  };
}

/*let bur1?
var bur1 = new MenuItem('The Fire Burger', '750 kCal', 'Gluten', 'Lactose');

var bur2 = new MenuItem('Fried Turkey Burger', '600 kCal', 'No gluten', 'Lactose');

var bur3 = new MenuItem('Double w cheese', '1800 kCal', 'Gluten', 'Lactose');

var bur4 = new MenuItem('Halloumi', '900 kCal', 'Gluten', 'Lactose'); 

var bur5 = new MenuItem('Veggie', '550 kCal', 'Gluten', 'No lactose'); 
*/
/*
var menu =  [ bur1, bur2, bur3, bur4, bur5];


//document.getElementById("myID").innerHTML = "Välj en burgare";

var myElement = document.getElementById("myyID");
for (burger in burgers)
{
    if (burger.stock > 0)
    {
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(burger.name);
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
    }
}

let myButton = document.getElementById('subbut');
myButton.addEventListener("click", myFunction);
function myFunction() {
    console.log ("Button clicked!");
    var nameid = document.getElementById("name").value;
    console.log(nameid);
    var emailid = document.getElementById("email").value;
    console.log(emailid);
    var streetid = document.getElementById("street").value;
    console.log(streetid);
    var houseid = document.getElementById("house").value;
    console.log(houseid);
    var paymentid = document.getElementById("payment").value;
    console.log(paymentid);
    var checkBox = document.getElementById("male");
    if(document.getElementById("male").checked){
        console.log("Male");
    }
    if(document.getElementById("female").checked){
        console.log("female");
    }
    if(document.getElementById("nonbin").checked){
        console.log("Non-binary");
    }
    if(document.getElementById("undisclosed").checked){
        console.log("Undisclosed");
    }
}

let myElement = document.getElementById("burgers");
var i = 0;
for (i; i < ; i++)
{
    let burgerdiv = document.createElement("div" )
    let createdName = document.createElement("h3");
    createdName.appendChild(name);
    burgerdiv.appendChild(createdName);
    let name = document.createTextNode(menu[i].name);

    let createdCal = document.createElement("li");
    createdCal.appendChild(kCal);
    burgerdiv.appendChild(createdCal);
    let kCal = document.createTextNode(menu[i].kCal);

    let createdLactose = document.createElement("li");
    createdLactose.appendChild(lactose);
    burgerdiv.appendChild(createdLactose);
    let lactose = document.createTextNode(menu[i].lactose)

    let createdGluten = document.createElement("li")
    createdGluten.appendChild(gluten);
    burgerdiv.appendChild(createdGluten);
    let gluten = document.createTextNode(menu[i].gluten)

    let createdImage = document.createElement("p");
    createdImage.appendChild(show_image(menu[i].image, 280, 180, menu[i].name))
    burgerdiv.appendChild(createdImage);
}
*/