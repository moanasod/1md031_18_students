var socket = io();

Vue.mixin({
    data: function () {
        return {
            mapPositionX: 0,
            mapPositionY: 0
        }
    }
})

var vm = new Vue({
    el: '#burgers',
    data: {
        food: food,
        burgers: []
    }, methods: {
        getBurgers: function () {
            return this.burgers;
        }
    }
})

var vm1 = new Vue({
    el: '#customer_information',
    data: {
        fullname: '',
        email: '',
        payment: '',
        male: '',
        female: '',
        nonbin: '',
        undisclosed: '',
        gender: '',
        orderConfirmed: false,
        burgers1: [],
        orders: {}
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));
        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        checkedBox: function (fullname, email, payment, gender) {
            console.log("Button clicked!");
            console.log(vm.burgers)
            this.burgers1 = vm.burgers;
            //            console.log(burgers)
            // let burgerid = document.createElement('p');
            // burgerid.appendChild(document.createTextNode(burgers));
            // //
            // let ordertext = document.createElement('p');
            // ordertext.appendChild(document.createTextNode("confirmation of order:"));
            // //
            // let fullnameid = document.createElement('p');
            // let emailid = document.createElement('p');
            // let paymentid = document.createElement('p');
            // let maleid = document.createElement('p');
            // let femaleid = document.createElement('p');
            // let nonbinid = document.createElement('p');
            // let undisclosedid = document.createElement('p');
            // fullnameid.appendChild(document.createTextNode(fullname));
            // emailid.appendChild(document.createTextNode(email));
            // paymentid.appendChild(document.createTextNode(payment));
            // myElement.appendChild(fullnameid);
            // myElement.appendChild(emailid);
            // myElement.appendChild(paymentid);
            // let genderid = document.createElement('p');

            // if (male) {
            //     genderid.appendChild(document.createTextNode(male));
            //     myElement.appendChild(genderid);
            // }
            // if (female) {
            //     genderid.appendChild(document.createTextNode(female));
            //     myElement.appendChild(genderid);
            // }
            // if (nonbin) {
            //     genderid.appendChild(document.createTextNode(nonbin));
            //     myElement.appendChild(genderid);
            // }
            // if (undisclosed) {
            //     genderid.appendChild(document.createTextNode(undisclosed));
            //     myElement.appendChild(genderid);
            // }
            //myElement.appendChild(burgerid);
            if (this.male) {
                this.gender = "Male"
            }
            if (this.female) {
                this.gender = "Female"
            }
            if (this.nonbin) {
                this.gender = "Non-binary"
            }
            if (this.undisclosed) {
                this.gender = "Undisclosed"
            }
            this.orderConfirmed = true;
            console.log(this.gender)
            console.log(gender)

            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: this.mapPositionX,
                    y: this.mapPositionY,
                },
                orderItems: this.burgers1,
                personlData: [fullname, email, payment, this.gender]
            });
            console.log("UPDATE ORDER")
            console.log(this.mapPositionX)
            console.log(this.mapPositionY)
        },
        getNext: function () {
            console.log("getNext körs");
            let lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        updateOrder: function (event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            this.mapPositionX = event.clientX - 10 - offset.x;
            this.mapPositionY = event.clientY - 10 - offset.y;
            console.log("UPDATE ORDER")
        },
    },
});


