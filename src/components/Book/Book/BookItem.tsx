import { Book } from "@/types/Book";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";

type BookProps = {
  book: Book;
};

const BookItem = (props: BookProps) => {
  const { book } = props;

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-slate-200 hover:translate-y-1 hover:scale-105 duration-200">
      <img
        className="object-cover w-full h-40"
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : `/favicon.ico`
        }
        alt="avatar"
      />

      <div className="py-2 text-center">
        <label className="block px-2 text-lg font-bold text-gray-800 truncate">
          {book.title}
        </label>
        <span className="block text-sm text-gray-700 truncate">
          {book.author_name}
        </span>
        <span className="text-sm font-semibold text-teal-900">
          {book.first_publish_year}
        </span>
      </div>
      <div className="pb-4 flex justify-center">
        <button className="flex items-center px-4 py-2 font-medium tracking-wide text-blue-500 capitalize transition-colors duration-300 transform rounded-lg hover:bg-blue-300 border-solid border-[1px] border-blue-400">
          <ShareIcon className="max-h-5 mx-1" />
          <span className="mx-1 text-nowrap">Share</span>
        </button>
      </div>
    </div>
  );
};

export default BookItem;
