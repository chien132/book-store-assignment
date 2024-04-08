import BookList from "@/components/Book/BookList/BookList";
import API from "@/libs/api";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  type favBookType = {
    work: {
      title: string;
      author_names: string;
      cover_id: string;
      first_publish_year: number;
    };
  };
  const [favBooks, setFavBooks] = useState([]);
  useEffect(() => {
    API.book.getFavorites().then((res) => {
      setFavBooks(
        res.data.reading_log_entries.map((book: favBookType) => ({
          title: book.work.title,
          author_name: book.work.author_names,
          cover_i: book.work.cover_id,
          first_publish_year: book.work.first_publish_year,
        }))
      );
    });
  }, []);
  return (
    <div>
      <div className="text-3xl py-4 text-rose-400">Favorites</div>
      <BookList books={favBooks}></BookList>
    </div>
  );
};

export default Favorites;
