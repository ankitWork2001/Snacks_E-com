import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../Reducer/Order/orderSlice.js'
export const store = configureStore({
  reducer: {orderReducer},
})