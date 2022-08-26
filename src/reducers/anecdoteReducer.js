import { createSlice } from "@reduxjs/toolkit";
import anecdoteServices from "../services/anecdotes";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);
const initialState = [];

// USING REDUX-T00LKIT

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    // we are abstracting it by using redux-thunk library
    // createAnecdote(state, action) {
    // this approach is done when there is no database
    // const newAnecdote = {
    //   content: action.payload,
    //   id: getId(),
    //   votes: 0,
    // };
    // return [...state, newAnecdote];

    // this particular approach is applied when we have to communicate with database
    //   return [...state, action.payload];
    // },
    voteAnecdote(state, action) {
      const id = action.payload;
      return state.map((eachObj) => {
        if (id === eachObj.id) {
          return { ...eachObj, votes: eachObj.votes + 1 };
        } else {
          return eachObj;
        }
      });
    },
    appendAnecdote(state, action) {
      return [...state, action.payload];
    },
    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const { voteAnecdote, appendAnecdote, setAnecdote } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll();

    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteServices.createNewAnecdote(content);

    dispatch(appendAnecdote(newAnecdote));
  };
};

export default anecdoteSlice.reducer;

// MANUAL APPROACH

// const reducer = (state = initialState, action) => {
// console.log("state now: ", state);
// console.log("action", action);

//   switch (action.type) {
//     case "NEW_ANECDOTE":
//       return state.concat(action.data);

//     case "VOTE":
//       const id = action.data.id;
//       return state.map((eachObj) => {
//         if (id === eachObj.id) {
//           return { ...eachObj, votes: eachObj.votes + 1 };
//         } else {
//           return eachObj;
//         }
//       });
//     default:
//       return state;
//   }
// };

// export const createAnecdote = (newAnecdote) => {
//   return {
//     type: "NEW_ANECDOTE",
//     data: {
//       content: newAnecdote,
//       id: getId(),
//       votes: 0,
//     },
//   };
// };

// export const voteAnecdote = (id) => {
//   return {
//     type: "VOTE",
//     data: { id },
//   };
// };

// export default reducer;
