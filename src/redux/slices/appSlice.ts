// Don't add any asynchronous logic or other "side effects" in reducer
// For example, logging a value to the console, ajax
// Just keep it simple
import { Book } from "@/types/Book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AppState {
  initialState: boolean;
  genre: string;
  books: Book[];
}
const initialState: AppState = {
  initialState: false,
  genre: "",
  books: [],
};

// export const getBook = createAction(
//   "book/getBook",
//   function (book: Omit<Book, "id">) { return book; }
// );

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state) => {
      state.initialState = true;
    },
    loadBook(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    selectGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(getBook, (state, action) => {
  //     const book = action.payload;
  //     state.books.push(book);
  //   });
  // },
});
export const { login, loadBook, selectGenre } = appSlice.actions;

export default appSlice.reducer;
