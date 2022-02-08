import axios from "axios"
import { baseURL } from "./baseURL"

const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
};

// Aqui na arrow function, é uma função assíncrona, que é atribuída a uma variável.

// Enquanto a função nomeada, do ex1 é uma função carregada no escopo global do script.