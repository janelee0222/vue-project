<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="add">hello {{addVal}}</h2>
  </div>
</template>

<script>
var aaa = 'this main'

var add = function () {
  this.addVal++
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: aaa,
      addVal: 0
    }
  },
  methods: {
    add: add
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
