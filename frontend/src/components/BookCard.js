import React from 'react';
import './BookCard.css';
import defaultImage from './default_image.jpg';

const BookCard = ({ book, addToBookshelf, removeFromBookshelf, isBookshelf }) => {
  return (
    <div className="book-card">
      <div className="card-inner">
        <div className="front-face">
          <div className="contents front">
            <img
              src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : defaultImage}
              alt={book.title}
              className="book-cover"
            />
          </div>
        </div>
        <div className="back-face">
          <div className="contents back">
            <h2>{book.title}</h2>
            <h3>{book.author_name ? `Author: ${book.author_name.join(', ')}` : 'Author not available'}</h3>
            <p>{book.first_publish_year ? `Year: ${book.first_publish_year}` : 'Year not available'}</p>
            {isBookshelf ? (
              <button onClick={() => removeFromBookshelf(book)}>Remove from Bookshelf</button>
            ) : (
              <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
