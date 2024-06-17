
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.books.find(b => b.id === parseInt(id)));

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
