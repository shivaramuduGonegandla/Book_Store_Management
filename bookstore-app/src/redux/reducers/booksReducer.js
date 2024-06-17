const initialState = {
    books: [],
    searchQuery: '',
    filters: {},
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BOOKS':
        return { ...state, books: action.payload };
      case 'SET_SEARCH_QUERY':
        return { ...state, searchQuery: action.payload };
      case 'SET_FILTERS':
        return { ...state, filters: action.payload };
      default:
        return state;
    }
  };
  
  export default booksReducer;
  