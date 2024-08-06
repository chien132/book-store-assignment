import { selectGenre } from "@/redux/slices/appSlice";
import React from "react";
import { useDispatch } from "react-redux";

const GenreSelector = () => {
  const genres = [
    "",
    "love",
    "business",
    "science",
    "fiction",
    "philosophy",
    "biography",
  ];

  const dispatch = useDispatch();

  const genreSelectHandler = (genre: string) => {
    dispatch(selectGenre(genre));
  };

  return (
    <div className="ps-10 h-full px-3 py-4 overflow-y-auto border-solid border-gray-700 ">
      <div className="text-xl ps-2 py-2">Book Genres</div>
      <ul className="space-y-2 font-medium">
        {genres.map((genre) => {
          return (
            <li key={genre}>
              <a
                onClick={() => genreSelectHandler(genre)}
                className=" capitalize flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <span className="ms-3">
                  {genre === "" ? "All books" : genre}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreSelector;
