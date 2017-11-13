var aaa = 'this main'

var add = function () {
  this.addVal++
}

var calc = function () {
  this.num++
}

export default {
  name: 'home',
  data () {
    return {
      msg: aaa,
      addVal: 0,
      num: 0
    }
  },
  methods: {
    add: add,
    calc: calc
  }
}
