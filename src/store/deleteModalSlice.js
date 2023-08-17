import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  itemId: null,
  sourceColumn: null
};

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    closeModal(state) {
      state.active = false;
    },
    openModal(state, { payload }) {
      const { sourceColumn, itemId } = payload;
      state.active = true;
      state.sourceColumn = sourceColumn;
      state.itemId = itemId;
    }
  }
});

export const { openModal, closeModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
