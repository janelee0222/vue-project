<template>
  <div>
    <!-- key값 을 사용하는 이유 앵귤러의 trackby 와 유사. 각각의 고유한 값을 주기위함 -->
    <h1 v-for="(value, key, index) in list" :key="index">
      {{index}} : {{key}} = {{value}}
    </h1>
    <div v-for="(txt, index) in addText(text)" :key="index">
      {{txt}}
    </div>
    <li v-for="(n,index) in even(numbers)" :key="index">{{ n }}</li>
  </div>
</template>

<script>
var list = {
  name: 'leenzze',
  weight: 'secret',
  height: 'secret',
  eyeColor: 'brown',
  favoriteFood: 'all'
}

var text = ['one', 'two', 'three', 'four']

export default {
  name: 'firstPageChild',
  data () {
    return {
      list: list,
      text: text,
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  methods: {
    addText: function (text) {
      return text.filter(function (value) {
        console.log(value)
        return value === 'one'
      })
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>
