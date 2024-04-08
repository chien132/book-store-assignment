export type Book = {
  author_name: string;
  title: string;
  cover_i: string;
  first_publish_year: number;
};
export type BookSearchParams = {
  q: string;
  limit: number;
  page: number;
  total: number;
};

type Author = {
  key: string;
  name: string;
};
export type BookByGenre = {
  authors: Author[];
  title: string;
  cover_id: string;
  first_publish_year: number;
};
export type BookGenreParams = {
  genre: string;
  offset: number;
  limit: number;
};
