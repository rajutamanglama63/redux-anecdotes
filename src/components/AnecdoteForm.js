import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const CreateAnecdote = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(createAnecdote(content));
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
