import { Link } from "react-router-dom";
import BookShelf from "./bookshelf"

const MainPage = ({allBooks, updateShelf}) => {
  return(
    <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div >
            <div className="list-books-content">
                <div>
                    <BookShelf books={allBooks.filter((book) => book.shelf === "currentlyReading")} 
                                                updateShelf={updateShelf} bookShelfTitle="Currently Reading" />
                    <BookShelf books={allBooks.filter((book) => book.shelf === "wantToRead")} 
                                                updateShelf={updateShelf} bookShelfTitle="Want to Read" />
                    <BookShelf books={allBooks.filter((book) => book.shelf === "read")} 
                                                updateShelf={updateShelf} bookShelfTitle="Read" />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
    </div >
  );
}

export default MainPage;