import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      console.log('addToBasket state, action >>', state, action);
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if(index >= 0){
        state.items.splice(index, 1);
        state.items = [...state.items, action.payload];
      }else{
        state.items = [...state.items, action.payload];
      }
    },
    removeFrombasket: (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if(index >= 0){
          state.items.splice(index, 1);
          action.payload.count > 0 && (state.items = [...state.items, action.payload]);
        }
        console.log('removeFrombasket state >>', state);

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFrombasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectTotalAmount = (state) => state.basket.items.reduce((acc, item) => acc + (item.price * item.count), 0);

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);

export const selectTotalItemInBasket = (state) => state.basket.items.reduce((acc, item) => acc + item.count, 0);
export default basketSlice.reducer