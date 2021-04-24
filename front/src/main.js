import Todos from './api/todos';

async function exec() {
  const todos = new Todos();

  const { data } = await todos.get();
  console.log(data);
}

exec();
