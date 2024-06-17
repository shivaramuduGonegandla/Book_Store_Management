import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions/booksActions';

const BookListing = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>Book Listing</h1>
      <div>
        {books.map(book => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListing;
