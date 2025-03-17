import { createSlice} from "@reduxjs/toolkit";

const initialState={
    orders:[]
}

const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{
        addOrder(state,action){
            // console.log(action.payload);
            const id=action.payload.id;
            // if the id is already present in the state, then update the quantity
            const existingOrder=state.orders.find(order=>order.id===id);
            if(existingOrder){
                existingOrder.quantity+=action.payload.quantity;
                return;
            }

            
            const order={
                ...action.payload,
                get total() {
                    return this.quantity * this.discountedPrice;
                }
            }
            // console.log(order);
            
            state.orders.push(order);
        },
        decrementOrder(state,action){
            const id=action.payload.id;
            const existingOrder=state.orders.find(order=>order.id===id);
            if(existingOrder){
                existingOrder.quantity-=1;
            }
            if(existingOrder.quantity===0){
                state.orders=state.orders.filter(order=>order.id!==id);
            }
        },
        removeOrder(state,action){
            const id=action.payload.id;
            const index=state.orders.findIndex(order=>order.id===id);
            if(index!==-1){
                state.orders.splice(index,1);
            }
        }
            



    }
})

export const {addOrder,decrementOrder,removeOrder}=orderSlice.actions;
export default orderSlice.reducer;