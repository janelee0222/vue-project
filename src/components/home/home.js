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

export default {
  name: 'home',
  data () {
    return {
      msg: aaa,
      addVal: 0,
      num: 0,
      firstName: 'Lee',
      lastName: 'Rozie',
      loginType:'username'
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