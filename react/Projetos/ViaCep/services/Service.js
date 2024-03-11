import axios from "axios";

const viaCepApi = `https://api.postmon.com.br/v1/cep/`;

const api = axios.create({ baseUrl: viaCepApi });

export default api;