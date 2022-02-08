import axios from "axios"
import { baseURL } from "./baseURL"

axios
  .get(`${baseURL}/subscribers`)
  .then(res => res.data)
  .then(console.log)

  async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };


 