import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import deleteModalSlice from "./deleteModalSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    deleteModal: deleteModalSlice
  }
});
