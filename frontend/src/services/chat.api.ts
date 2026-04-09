import axios from 'axios';

export const sendChat = async (question: string) => {
  return axios.post('http://localhost:3000/api/chat', { question });
};
