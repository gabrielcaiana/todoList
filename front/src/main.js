import Todos from './api/todos';
import './assets/css/main.css'

async function exec() {
  const todos = new Todos();

  const { data } = await todos.list();
  console.log(data);
}

exec();
