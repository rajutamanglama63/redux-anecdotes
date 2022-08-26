import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNewAnecdote = async (content) => {
  const anecdoteObj = {
    content,
    vote: 0,
  };

  const response = await axios.post(baseUrl, anecdoteObj);
  return response.data;
};

const updateVote = async (id, votedObj) => {
  const response = await axios.put(`${baseUrl}/${id}`, votedObj, { new: true });
  return response.data;
};
export default { getAll, createNewAnecdote, updateVote };
