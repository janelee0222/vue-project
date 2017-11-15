<script src="./todo.js"></script>

<template id="todo-list-example">
<div>
    <input
        v-model="newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add a todo"
    >
    <!-- <ul>
        <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
        ></li>
    </ul> -->
</div>
</template>
