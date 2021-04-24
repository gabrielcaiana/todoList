import Todos from './api/todos';

async function exec() {
  const todos = new Todos();

  const { data } = await todos.list();
  console.log(data);
}

exec();
