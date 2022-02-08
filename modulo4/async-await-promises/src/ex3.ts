import axios from "axios"
import { baseURL } from "./baseURL"


type user = {
	id: string;
	name: string;
	email: string;
}

//a. Sim, pq user é um objeto e não um array.

//b. Não, é mais indicado fazer o map em um array com Promise<user[]>

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};