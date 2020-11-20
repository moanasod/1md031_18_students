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

vueAllObject = new Vue({
    el: '#vueAll',
    data: {
        fullname: '',
        email: '',
        payment: '',
        female: '',
        male: '',
        nonbin: '',
        undisclosed: ''
        //recievedord: {},
}

  })

