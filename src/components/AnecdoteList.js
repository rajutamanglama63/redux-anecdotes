import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { message, removeMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  const dispatch = useDispatch();
  const vote = (id) => {
    // console.log("vote", id);

    dispatch(voteAnecdote(id));

    const votedAnecdote = anecdotes.find((a) => a.id === id);
    dispatch(message(`you voted '${votedAnecdote.content}'`));
    setTimeout(() => dispatch(removeMessage(null)), 5000);
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
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
