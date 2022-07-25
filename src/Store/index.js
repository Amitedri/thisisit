import { configureStore } from '@reduxjs/toolkit'
import Slice from '../Slice'
 const store = configureStore({
  reducer: {
    productSlice:Slice
  },
})

export default store