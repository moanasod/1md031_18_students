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

//var menu =  [ bur1, bur2, bur3, bur4, bur5];


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




