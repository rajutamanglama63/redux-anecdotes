import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { message, removeMessage } from "../reducers/notificationReducer";
import anecdoteServices from "../services/anecdotes";

const CreateAnecdote = () => {
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";

    const newAnecdote = await anecdoteServices.createNewAnecdote(content);

    dispatch(createAnecdote(newAnecdote));
    dispatch(message("Anecdote created."));
    setTimeout(() => dispatch(removeMessage(null)), 5000);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateAnecdote;
