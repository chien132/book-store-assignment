import React from "react";
import BookItem from "../Book/BookItem";
import { Book } from "@/types/Book";

type BookListProps = {
  books: Book[];
};
const BookList = (props: BookListProps) => {
  console.log(props);
  return (
    <div className="grid grid-cols-4 gap-8">
      {props.books.map((book) => (
        <BookItem book={book} key={book.author_name}></BookItem>
      ))}
    </div>
  );
};

export default BookList;
