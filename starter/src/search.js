import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BookAPI from "./BooksAPI";
import { useEffect, useRef } from "react";
import Book from "./book";

const SearchBook = ({ updateShelf }) => {
  const [shelfBooks, setShelfBooks] = useState([]);
  const [booksFound, setBooksFound] = useState([]);
  const [queryBook, setQueryBook] = useState("");

  useEffect(() => {
    const bookSearch = async () => {
      const res = await BookAPI.search(queryBook);

      setBooksFound(res);
      //setQueryBook("");
    };
    bookSearch();
  }, [queryBook]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setShelfBooks(res);
    };
    getBooks();
  }, []);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setQueryBook(e.target.value)}
          />
        </div>
      </div>

      <div className="search-books-results">
        {booksFound !== undefined && booksFound.length > 0 && (
          <div>
            <strong>{booksFound.length} books found </strong>
            <ol className="books-grid">
              {booksFound.map((book) => {
                let shelf = shelfBooks.filter((sbook) => sbook.id === book.id);
                book.shelf = shelf.length > 0 ? shelf[0].shelf : book.shelf;
                return (
                  <li key={book.id}>
                    <Book book={book} updateShelf={updateShelf} />
                  </li>
                );
              })}
            </ol>
          </div>
        )}
        {booksFound !== undefined && booksFound.length === 0 && (
          <strong>No books found</strong>
        )}
      </div>
    </div>
  );
};

export default SearchBook;
