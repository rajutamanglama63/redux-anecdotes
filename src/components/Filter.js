import { useSelector, useDispatch } from "react-redux";
import { filter } from "../reducers/filterReducer";

const Filter = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputsToFilter = e.target.value;
    let filteredAnecdotes = anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(inputsToFilter.toLowerCase())
    );
    // console.log(filteredAnecdotes);
    dispatch(filter(filteredAnecdotes));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
