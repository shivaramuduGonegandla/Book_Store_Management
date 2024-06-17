import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/actions/cartActions';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleOrderPlacement = () => {
    // Handle order placement logic
    dispatch(clearCart());
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleOrderPlacement} disabled={cartItems.length === 0}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
