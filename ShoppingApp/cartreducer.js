import { createSlice } from '@reduxjs/toolkit';

export const cartslice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalPrice: 0, 
  },
  reducers: {
    addTocart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.price += action.payload.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1,price: action.payload.price  });
        state.totalPrice += action.payload.price
      }
    },
    removeFromcart: (state, action) => {
      const itemToRemove = state.cart.find(item => item.id === action.payload.id);
      if (itemToRemove) {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
        state.totalPrice -= itemToRemove.price; // Subtract price from totalPrice
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.price += action.payload.price; // Update price
        state.totalPrice += action.payload.price
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity--;
        itemInCart.price -= action.payload.price; // Update price
        state.totalPrice -= action.payload.price
        if (itemInCart.quantity === 0) {
          state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export default cartslice.reducer;
export const { addTocart, removeFromcart, incrementQuantity, decrementQuantity } =
  cartslice.actions;
