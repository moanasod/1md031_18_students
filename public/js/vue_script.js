var vm = new Vue({
  el: '#myID',
  data: {
      food: food,
      burgers: []
  }, methods:{
      getBurgers: function(){
          return this.burgers;
      }
  }

})

var vm = new Vue({
  el: '#myID',
  data: {
    HejMoana: 'Välj en burgare' + new Date()
  }
}) 

var vm = new Vue({
  el: '#myyID',
  data: {
    burgers: [ { name: "burgerA", stock: 2 }, { name: "burgerB", stock: 0 }, { name: "burgerC", stock: 3 } ]
  }
})

var vm = new Vue({
  el: '#myID',
  data: {
      b1: bur1.iteam(),
      b2: bur2.iteam(),
      b3: bur3.iteam(),
      b4: bur4.iteam(),
      b5: bur5.iteam()
  }
})