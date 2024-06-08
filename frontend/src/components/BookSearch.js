import React, { useState, useEffect } from 'react'; // Make sure React is imported like this

import axios from 'axios';
import BookCard from './BookCard';
import './BookSearch.css';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      const response = await axios.get('https://openlibrary.org/search.json?q=react&limit=10&page=1');
      setBooks(response.data.docs);
    };

    fetchDefaultBooks();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (debouncedQuery.length > 2) {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${debouncedQuery}&limit=10&page=1`);
        setBooks(response.data.docs);
      }
    };

    if (debouncedQuery.length > 2) {
      fetchBooks();
    }
  }, [debouncedQuery]);

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
  
  
    const isBookInBookmark = bookshelf.some(item => item.key === book.key);
  
    if (isBookInBookmark) {
      alert("This book is already in your bookmark.");
    } else {
      bookshelf.push(book);
      alert("Book Added Successfully");
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }
  };

  return (
    <div className="book-search">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for books" 
      />
      <br></br>
       <button onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button>
      <div className="results">
        {books.map((book, index) => (
         <BookCard key={index} book={book} addToBookshelf={addToBookshelf} isBookshelf={false} />

        ))}
      </div>
     
    </div>
  );
};

export default BookSearch;
