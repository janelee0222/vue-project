<!-- <script src="./home.js"></script> -->
<style src="./home.css"></style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="add">hello {{addVal}}</h2>
    <input v-model.number="num" @keyup.13="calc">
    <div>{{num}}</div>
  </div>
</template>

<script>
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
</script>