export const addToCart = book => ({
    type: 'ADD_TO_CART',
    payload: book,
  });
  
  export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
  