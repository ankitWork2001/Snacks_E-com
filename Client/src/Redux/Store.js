import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../Reducer/Order/orderSlice.js'
export const store = configureStore({
  reducer: {orderReducer},
})

store.subscribe(() => {
  const { orderReducer } = store.getState();
  localStorage.setItem('orders', JSON.stringify(orderReducer.orders));
});