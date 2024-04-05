import API from "@/libs/api";
import React, { useEffect, useState } from "react";
import BookList from "./BookList/BookList";

const AllBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.book.search().then((res) => {
      const resData = res.data.docs;
      setBooks(resData);
      // console.log(res);
    });
  }, []);

  return <BookList books={books}></BookList>;
};

export default AllBook;
