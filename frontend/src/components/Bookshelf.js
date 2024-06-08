import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import './Bookshelf.css';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    alert("Book Removed Successfully");
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf">
      <h1>My Bookshelf</h1>
       <button onClick={() => window.location.href = '/'}>Back to Search</button>
      
      <div className="bookshelf-list">
        {bookshelf.map((book, index) => (
          <BookCard key={index} book={book} removeFromBookshelf={removeFromBookshelf} isBookshelf={true} />

        ))}
      </div>
     
    </div>
  );
};

export default Bookshelf;
