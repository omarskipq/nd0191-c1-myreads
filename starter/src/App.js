import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./home";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBook from "./search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
    };
    getAllBooks();
  }, []);

  const updateShelf = async (book_, shelf_) => {
    await BooksAPI.update(book_, shelf_);
    book_.shelf = shelf_;
    setAllBooks(allBooks.filter((book) => book.id !== book_.id).concat(book_));
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage allBooks={allBooks} updateShelf={updateShelf} />}
        />
        <Route
          exact
          path="/search"
          element={<SearchBook updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
