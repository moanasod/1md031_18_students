var vm = new Vue({
  el: '#burgers',
  data: {
      food: food,
      burgers: []
  }, methods:{
      getBurgers: function(){
          return this.burgers;
      }
  }
})


 var socket = io();

var vm1 = new Vue({
  el: '#customer_information',
  data: {
    fullname: "",
    email: "",
    payment: "",
    male: "",
    female: "",
    nonbin: "",
    undisclosed: "",
    recievedord: {},
  },
  created: function() {
    socket.on('initialize', function(data) {
        this.recievedord = data.recievedord;
    }.bind(this));
    socket.on('currentQueue', function(data) {
        this.recievedord = data.recievedord;
    }.bind(this));
},
 methods: {
  checkedBox: function(name, email, payment, male, female, nonbin, undisclosed) {
  console.log("Button clicked!");
  let myElement = document.getElementById("recievedord");
  console.log(name)
  let burgers = vm.getBurgers();
            let burgerid = document.createElement("p");
            burgerid.appendChild(document.createTextNode(burgers));
            //
            let ordertext = document.createElement("p");
            ordertext.appendChild(document.createTextNode("confirmation of order:"));
            //
            let nameid = document.createElement("p");
            let emailid = document.createElement("p");
            let checkedid = document.createElement("p");
            let maleid = document.createElement("p");
            let femaleid = document.createElement("p");
            let nonbinid = document.createElement("p");
            let undisclosedid = document.createElement("p");
            nameid.appendChild(document.createTextNode(name));
            emailid.appendChild(document.createTextNode(email));
            checkedid.appendChild(document.createTextNode(payment));
            myElement.appendChild(nameid);
            myElement.appendChild(emailid);
            myElement.appendChild(checkedid);
            if (male) {
                maleid.appendChild(document.createTextNode(male));
                myElement.appendChild(maleid);
            }
            if (female) {
                femaleid.appendChild(document.createTextNode(female));
                myElement.appendChild(femaleid);
            }
            if (nonbin) {
                nonbinid.appendChild(document.createTextNode(nonbin));
                myElement.appendChild(nonbinid);
            }
            if (undisclosed) {
                undisclosedid.appendChild(document.createTextNode(undisclosed));
                myElement.appendChild(undisclosedid);
            }
            myElement.appendChild(burgerid);
        },
        getNext: function() {
            //orders eller recievedord
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addToOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: ['Beans', 'Curry'],
            });
        },
    },
});


 