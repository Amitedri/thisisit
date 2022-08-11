import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let item = state.products.filter((el) => el.id == action.payload.id);
      if (item == false) {
        state.products = [...state.products, action.payload];
      }
      if(item == true){
        let items = state.products.filter((el) => el.id != action.payload.id);
        items.push(item);
        state.products = items;
      }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeProduct: (state, action) => {
      let copy = [...state.products];
      let newArr = copy.filter((el) => el.id != action.payload.id);
      console.log(newArr)
      state.products = newArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, setProducts,removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
