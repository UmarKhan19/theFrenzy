import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        wishlistItems: [] // Add wishlist items array
    },
    reducers: {
        add: (state, action) => {
            state.cartItems.push(action.payload);
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
        },
        addToWishlist: (state, action) => {
            state.wishlistItems.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((item) => item._id !== action.payload);
        }
    },
});

export const { add, remove, addToWishlist, removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;
