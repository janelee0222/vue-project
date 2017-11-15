// Vue.component('todo-item', {
//   template: '\
//     <li>\
//       {{ title }}\
//       <button v-on:click="$emit(\'remove\')">X</button>\
//     </li>\
//   ',
//   props: ['title']
// })

Vue.component('todo-list', {
  template: '#todo-list-example',
  props:['todos'],
  data: {
    newTodoText: '',
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})