import Book from './book'

const BookShelf = ({books, updateShelf, bookShelfTitle}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {bookShelfTitle} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
                        <li key={book.title}>
                            <Book book={book} updateShelf={updateShelf} />
                        </li>
                  ))}
        </ol>
      </div>
    </div>
  );

}

export default BookShelf;