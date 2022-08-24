import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  modalText: '',
  showCart: false,
  clientData: {},
  termsModal: false,
  generalConsent: false,
};

export const productsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let item = state.products.filter((el) => el.id == action.payload.id);
      if (item[0] === undefined) {
        state.products = [...state.products, action.payload];
      }
      if (item[0] !== undefined) {
        let items = [...state.products].filter((el) => el.id !== action.payload.id);
        state.products = [...items, action.payload];
      }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTermsModal: (state, action) => {
      state.termsModal = action.payload;
    },
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setGeneralConsent: (state, action) => {
      state.generalConsent = action.payload;
    },
    setClientData: (state, action) => {
      state.clientData = action.payload;
    },
    removeProduct: (state, action) => {
      let copy = [...state.products];
      let newArr = copy.filter((el) => el.id != action.payload.id);
      console.log(newArr);
      state.products = newArr;
    },
    setModalText: (state, action) => {
      state.modalText = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, setProducts, removeProduct, setModalText, setShowCart, setClientData, setTermsModal, setGeneralConsent } = productsSlice.actions;

export default productsSlice.reducer;
