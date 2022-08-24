import React from "react";

import { useSelector, useDispatch } from "react-redux";
import CreateAnecdote from "./components/CreateAnecdote";
import { voteAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    // console.log("vote", id);

    dispatch(voteAnecdote(id));
  };
  console.log(anecdotes);

  return (
    <div>
      <h2>Anecdotes</h2>

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <CreateAnecdote />
    </div>
  );
};

export default App;
