import axios from 'axios';

export const setBooks = books => ({
  type: 'SET_BOOKS',
  payload: books,
});

export const fetchBooks = () => async dispatch => {
  try {
    const response = await axios.get('/api/books');
    dispatch(setBooks(response.data));
  } catch (error) {
    console.error('Failed to fetch books', error);
  }
};
