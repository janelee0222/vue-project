import Vue from 'vue'

var aaa = 'this main'

var add = function () {
  this.addVal++
}

var calc = function () {
  this.num++
}

var setFullName = function () {
  return this.firstName + '' + this.lastName
}

var changeMode = function () {
  this.loginType == 'username' ? this.loginType = 'email' : this.loginType = 'username'
}

Vue.component('coupon', {
  props : ['code'],
  template: `<input type="text" :value="code" @input="updateCode($event.target.value)">`,
  methods: {
    updateCode(code) {
      this.$emit('input',code)
    }
  }
})

export default {
  name: 'home',
  data () {
    return {
      msg: aaa,
      addVal: 0,
      num: 0,
      firstName: 'Lee',
      lastName: 'Rozie',
      loginType:'username',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      coupon: 'ddddd'
    }
  },
  computed: {
    fullName: setFullName
  },
  methods: {
    add: add,
    calc: calc,
    changeMode: changeMode
  }
}