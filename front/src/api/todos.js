import axios from '../utils/axios';

export default class Todos {
  async get() {
    const response = await axios.get('/todos');
    return response;
  }
}
