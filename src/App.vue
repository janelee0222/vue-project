<style src="./assets/css/common.css"></style>
<style src="./assets/css/main.css"></style>

<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <img src="./assets/logo.png">
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/first/Peter">firstPage</router-link></li>
        <li><router-link to="/first/Peter/child">firstPageChild</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
