import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      // console.log(action.payload);
      // console.log(state);

      state.bookList.push(action.payload);
    },
  },
});
export const selectBookList = (state) => state.book.bookList;
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
