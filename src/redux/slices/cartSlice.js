import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);

      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload);

      if (findItems) {
        findItems.count--;
      }
    },

    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, clearItems, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
