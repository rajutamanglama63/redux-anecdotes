import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import anecdoteServices from "./services/anecdotes";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
// import { setAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  // fetching operation in component is not good practise. let's abstract it down with redux-thunk
  useEffect(() => {
    // anecdoteServices
    //   .getAll()
    //   .then((anecdotes) => dispatch(setAnecdote(anecdotes)));

    dispatch(initializeAnecdotes());
  }, [dispatch]);
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
