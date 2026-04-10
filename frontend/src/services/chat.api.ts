import axios from 'axios';
const API = import.meta.env.VITE_API_URL;
export const sendChat = async (question: string) => {
  return axios.post(`${API}/api/chat`, { question });
};
