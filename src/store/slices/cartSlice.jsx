'use  client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    items: [],
    totalAmount: 0,
    totalQuantity: 0, 
};

const cartSlice = createSlice({ 
    name: 'cart',
    initialState, 
    reducers: {
        
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;
            state.totalAmount += newItem.price; 

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    img: newItem.image,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        },

    },
});

export const { addItemToCart, removeItemFromCart, clearCart, setCart } = cartSlice.actions; // Export actions
export default cartSlice.reducer; 