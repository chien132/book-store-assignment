import { Book } from "@/types/Book";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import React from "react";

type BookProps = {
  book: Book;
};

const BookItem = (props: BookProps) => {
  const { book } = props;

  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover w-full h-56"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt="avatar"
      />

      <div className="py-5 text-center">
        <label className="block text-lg font-bold text-gray-800 dark:text-white truncate">
          {book.title}
        </label>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          {book.author_name}
        </span>
      </div>
      <div className="pb-6 flex justify-center">
        <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
          {/* <svg
            className="w-5 h-5 mx-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg> */}
          <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
          <span className="mx-1 text-nowrap">Favorite</span>
        </button>
      </div>
    </div>
  );
};

export default BookItem;
