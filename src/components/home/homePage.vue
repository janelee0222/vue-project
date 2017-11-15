<script src="./home.js"></script>
<style src="./home.css"></style>
<!-- <script src="../unit/todo/todo.js"></script> -->

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="add">hello, click me! {{addVal}}</h2>
    <div>this is computed example (watch up version) : {{fullName}}</div>
    <!-- 데이터는 그대로 다르게 사용하려면  key="username-input", "email-input" 추가 -->
    <div class="con-wrap">
      <div v-if="loginType === 'username'">
        <label>사용자 이름</label>
        <input placeholder="사용자 이름을 입력하세요">
      </div>
      <div v-else>
        <label>이메일</label>
        <input placeholder="이메일 주소를 입력하세요">
      </div>
      <button class="btn-style btn btn-sm btn-primary" @click="changeMode">변경</button>
    </div>
    <input v-model.number="num" @keyup.13="calc">
    <div>{{num}}</div>
    <todo-list :todos="todos"></todo-list>
  </div>
</template>
