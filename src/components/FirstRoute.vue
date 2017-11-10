<template>
  <div>
    <h1>{{ msg }}</h1>
    Hello {{$route.params.name}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'firstRoute',
  data () {
    return {
      msg: 'first route'
    }
  }
}
</script>
