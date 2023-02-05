import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cart: [],
  totalQty: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      //หาไอดีเพื่อไม่ให้เพิ้มซ้ำ และบวก qty + 1
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].sumQty += 1;
        state.cart[find].sumPrice += state.cart[find].price;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQty, totalPrice } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, sumQty } = cart;
          const itemTotal = price * sumQty;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQty += sumQty;
          return cartTotal;
        },
        {
          totalQty: 0,
          totalPrice: 0,
        }
      );
      (state.totalQty = totalQty),
        (state.totalPrice = parseInt(totalPrice.toFixed(2)));
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            sumQty: item.sumQty + 1,
            sumPrice: item.sumPrice + item.price,
          };
        }
        return item;
      });
    },

    decreaseItemQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.sumQty > 1) {
            return {
              ...item,
              sumQty: item.sumQty - 1,
              sumPrice: item.sumPrice - item.price,
            };
          }
        }
        return item;
      });
    },

    AddressInput: (state, action) => {
      switch (action.payload !== undefined) {
        case action.payload.cart !== undefined:
          state.cart = action.payload.cart;
          break;
        case action.payload.firstname !== undefined:
          state.firstname = action.payload.firstname;
          break;
        case action.payload.lastname !== undefined:
          state.lastname = action.payload.lastname;
          break;
        case action.payload.tel !== undefined:
          state.tel = action.payload.tel;
          break;
        case action.payload.email !== undefined:
          state.email = action.payload.email;
          break;
        case action.payload.subDistrict !== undefined:
          state.subDistrict = action.payload.subDistrict;
          break;
        case action.payload.district !== undefined:
          state.district = action.payload.district;
          break;
        case action.payload.province !== undefined:
          state.province = action.payload.province;
          break;
        case action.payload.address !== undefined:
          state.address = action.payload.address;
          break;
        case action.payload.postalCode !== undefined:
          state.postalCode = action.payload.postalCode;
          break;
        case action.payload.notes !== undefined:
          state.notes = action.payload.notes;
          break;
        case action.payload.totalPrice !== undefined:
          state.totalPrice = action.payload.totalPrice;
          break;
        case action.payload.totalQty !== undefined:
          state.totalQty = action.payload.totalQty;
          break;
        default:
          break;
      }
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQty,
  decreaseItemQty,
  AddressInput,
} = cartSlice.actions;

export default cartSlice.reducer;
