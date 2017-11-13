<style src="./assets/css/common.css"></style>
<style src="./assets/css/main.css"></style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/firstroute/Peter">firstroute</router-link></li>
        <li><router-link to="/firstroute/Peter/child">firstrouteChild</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
