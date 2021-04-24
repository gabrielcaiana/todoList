import { createApp } from 'vue'
import Todos from './api/todos';
import './assets/css/main.css'

const apiTodos = new Todos();

const app = createApp({
  data: () => ({
    todos: []
  }),

  created() {
    this.fetchTodos()
  },

  methods: {
    async fetchTodos() {
      const { data } = await apiTodos.list()
      this.todos = data
      console.log(this.todos)
    }
  }
})

app.mount('#app')
