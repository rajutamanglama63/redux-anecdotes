import { useSelector, useDispatch } from "react-redux";
import { anecdoteVote } from "../reducers/anecdoteReducer";
import {
  message,
  notification,
  removeMessage,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  // console.log(anecdotes);
  const filteredAnecs = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const vote = (id) => {
    // console.log("vote", id);

    dispatch(anecdoteVote(id));

    const votedAnecdote = anecdotes.find((a) => a.id === id);
    dispatch(notification(`you voted ${votedAnecdote.content}`, 5000));

    // this step is abstracted down or handled by redux-thunk in anecdoteReducer.js file
    //   dispatch(message(`you voted '${votedAnecdote.content}'`));
    //   setTimeout(() => dispatch(removeMessage(null)), 5000);
  };
  return (
    <div>
      {filteredAnecs !== ""
        ? filteredAnecs.map((filterAnec) => (
            <div key={filterAnec.id}>
              <div>{filterAnec.content}</div>
              <div>
                has {filterAnec.votes}
                <button onClick={() => vote(filterAnec.id)}>vote</button>
              </div>
            </div>
          ))
        : anecdotes.map((anecdote) => (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default AnecdoteList;
