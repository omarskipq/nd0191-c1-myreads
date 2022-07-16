const Book = ({ book, updateShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf || "none"}
            onChange={(event) => updateShelf(book, event.target.value)}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title || "Not Found"}</div>
      <div className="book-authors">{book.authors || "Not Found"}</div>
    </div>
  );
};

export default Book;
