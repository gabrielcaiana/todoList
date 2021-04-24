import { createApp } from 'vue';
import Todos from './api/todos';
import './assets/css/main.css';

const apiTodos = new Todos();

const app = createApp({
  data: () => ({
    todos: [],
    form: {
      text: '',
      done: false
    }
  }),

  created() {
    this.fetchTodos();
  },

  methods: {
    async fetchTodos() {
      const { data } = await apiTodos.list();
      this.todos = data;
      console.log(this.todos);
    },

    async createdTodo() {
      const { data } = await apiTodos.create(this.form);
      this.todos.push(data)
      this.form = ""
    },
  },
});

app.mount('#app');
