<script src="./home.js"></script>
<style src="./home.css"></style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="add">hello {{addVal}}</h2>
    <input v-model.number="num" @keyup.13="calc">
    <div>{{num}}</div>
  </div>
</template>
