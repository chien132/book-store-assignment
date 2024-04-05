import BookList from "@/components/Book/BookList/BookList";
import API from "@/libs/api";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favBooks, setFavBooks] = useState([]);
  useEffect(() => {
    API.book.getFavorites().then((res) => {
      console.log(res);
      setFavBooks(
        res.data.reading_log_entries.map((book) => ({
          title: book.work.title,
          author_name: book.work.author_names,
          cover_i: book.work.cover_id,
        }))
      );
    });
  }, []);
  return (
    <div>
      <div className="text-4xl py-4 text-rose-400">Favorites</div>
      <BookList books={favBooks}></BookList>
    </div>
  );
};

export default Favorites;
