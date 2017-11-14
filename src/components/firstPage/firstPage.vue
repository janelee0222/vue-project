<template>
  <div>  
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> -->
    <h1>{{ msg }}</h1>
    Hello {{$route.params.name}}
    <router-view/>
    <div class="container text-center">
        <div class="box" :class="{'red': color, 'blue':!color}"></div>
        <div class="box" :class="[color ? 'purple': 'green']"></div>
        <!-- 스타일 조건 예제 -->
        <!-- <div class="box" :class="[{purple:color}, green]"></div> -->
        <div class="box" :class="{'red': color, 'blue':!color}"></div>
        <div class="box" :class="{'purple': color, 'green':!color}"></div>
        <button v-on:click="flipColor" class="btn btn-block btn-success">
            Flip Color!
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  data () {
    return {
      msg: 'first Page',
      color: true
    }
  },
  methods: {
    flipColor: function () {
      this.color = !this.color
    }
  }
}
</script>

<style>
    .red {
        background: red;
    }

    .blue {
        background: blue;
    }

    .purple {
        background: purple;
    }

    .green {
        background: green;
    }

    .box {
        float: left;
        width: 200px;
        height: 200px;
        margin: 40px;
        border: 1px solid rgba(0, 0, 0, .2);
    }
</style>

