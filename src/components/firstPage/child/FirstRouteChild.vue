<template>
  <div>
    <!-- key값 을 사용하는 이유 앵귤러의 trackby 와 유사. 각각의 고유한 값을 주기위함 -->
    <h1 v-for="(value, key, index) in list" :key="index">
      {{index}} : {{key}} = {{value}}
      </h1>
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
export default {
  name: 'firstRouteChild',
  data () {
    return {
      list: list
    }
  }
}
</script>
