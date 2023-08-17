import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
    .then((res) => res.data);
  return data;
});

const initialState = {
  new: [],
  inProgress: [],
  done: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    moveTodo(state, { payload }) {
      const { itemId, sourceColumn, destinationColumn, destinationIdx } =
        payload;

      const todo = state[sourceColumn].find((item) => {
        return item.id === parseInt(itemId);
      });

      state[sourceColumn] = state[sourceColumn].filter((item) => item !== todo);

      state[destinationColumn].splice(destinationIdx, 0, todo);
    },
    deteleTodoFromColumn(state, { payload }) {
      const { itemId, sourceColumn } = payload;

      state[sourceColumn] = state[sourceColumn].filter(
        (item) => item.id !== parseInt(itemId)
      );
    },
    deleteAllTodosFromColumn(state, { payload }) {
      const { sourceColumn } = payload;
      state[sourceColumn] = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.new = action.payload;
    });
  }
});

export const { moveTodo, deteleTodoFromColumn, deleteAllTodosFromColumn } =
  todoSlice.actions;
export default todoSlice.reducer;
