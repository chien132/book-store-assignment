import API from "@/libs/api";
import React, { useEffect, useState } from "react";
import BookList from "@/components/Book/BookList/BookList";
import SearchIcon from "@mui/icons-material/Search";
import { Pagination } from "antd";
import { BookByGenre, BookSearchParams } from "@/types/Book";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { loadBook } from "@/redux/slices/appSlice";
import Category from "@/components/Book/GenreSelector";

const Homepage = () => {
  // const [books, setBooks] = useState([]);
  const [bookSearchParams, setBookSearchParams] = useState<BookSearchParams>({
    q: "cat",
    limit: 12,
    page: 1,
    total: 0,
  });

  const appState = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(bookSearchParams);
    if (appState.genre !== "") {
      API.book
        .getByGenre({
          genre: appState.genre,
          offset: (bookSearchParams.page - 1) * bookSearchParams.limit,
          limit: bookSearchParams.limit,
        })
        .then(
          (res) => {
            const resData = res.data.works;
            bookSearchParams.total = res.data.work_count;
            dispatch(
              loadBook(
                resData.map((book: BookByGenre) => ({
                  title: book.title,
                  author_name: book.authors[0]?.name,
                  cover_i: book.cover_id,
                  first_publish_year: book.first_publish_year,
                }))
              )
            );
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      API.book.search(bookSearchParams).then(
        (res) => {
          const resData = res.data.docs;
          // setBooks(resData);
          dispatch(loadBook(resData));
          bookSearchParams.total = res.data.num_found;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [bookSearchParams, dispatch, appState.genre]);

  const onSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setBookSearchParams({
        ...bookSearchParams,
        q: (event.target as HTMLInputElement).value,
        page: 1,
      });
    }
  };

  const onSizeChange = (current: number, size: number) => {
    setBookSearchParams({
      ...bookSearchParams,
      limit: size,
      page: current,
    });
  };

  const onPageSelect = (selectedPage: number) => {
    setBookSearchParams({ ...bookSearchParams, page: selectedPage });
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <Category />
        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <div className="ml-0 my-2">
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                  <SearchIcon />
                </div>
                <input
                  onKeyDown={onSearch}
                  className="block w-full p-2 ps-10 text-md border border-gray-300 rounded-lg"
                  placeholder="Search books..."
                />
              </div>
            </div>
            {bookSearchParams.total > 0 && (
              <Pagination
                current={bookSearchParams.page}
                defaultCurrent={1}
                className="m-auto mr-0 col-span-2"
                onChange={onPageSelect}
                showSizeChanger={false}
                pageSize={bookSearchParams.limit}
                total={bookSearchParams.total}
                onShowSizeChange={onSizeChange}
                showTitle={false}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} books`
                }
                showLessItems
                pageSizeOptions={[4, 8, 16, 32]}
              />
            )}
          </div>
          <BookList books={appState.books}></BookList>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
