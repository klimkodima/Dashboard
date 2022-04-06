import { apiBaseUrl } from "../constants";
import axios from 'axios';

export const getResource = async (querry: string) => {
  try {
    const { data } = await axios.get(apiBaseUrl + querry);
    return data;
  } catch (error) {
    console.log(error);
  }
};