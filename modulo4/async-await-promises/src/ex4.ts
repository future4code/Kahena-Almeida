import axios from "axios"
import { baseURL } from "./baseURL"

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseURL}/news`, {
    title: title,
    content: content, 
    date: date
  });
}

// É uma função nomeada async que retorna uma promessa.