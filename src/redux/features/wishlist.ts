import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { notifyError, notifySuccess } from "@/utils/toast";
import { IProduct } from "@/types/product-d-t";


let initialWishlistState:{wishlist: IProduct[]} = {
  wishlist: [],
};


export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    add_to_wishlist: (state, { payload }:{ payload:IProduct }) => {
      const isExist = state.wishlist.some(
        (item: IProduct) => item.id === payload.id
      );
      if (!isExist) {
        state.wishlist.push(payload);
        notifySuccess(`${payload.title} added to wishlist`);
      } else {
        state.wishlist = state.wishlist.filter(
          (item: IProduct) => item.id !== payload.id
        );
        notifyError(`${payload.title} removed from wishlist`);
      }
      setLocalStorage("wishlist_items", state.wishlist);
    },
    remove_wishlist_product: (state, { payload }:{ payload:IProduct }) => {
      state.wishlist = state.wishlist.filter(
        (item: IProduct) => item.id !== payload.id
      );
      notifyError(`${payload.title} removed from wishlist`);
      setLocalStorage("wishlist_items", state.wishlist);
    },
    getWishlistProducts:(state) => {
      state.wishlist = getLocalStorage('wishlist_items')
    }
  },
});

export const {
  add_to_wishlist,
  remove_wishlist_product,
  getWishlistProducts,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
