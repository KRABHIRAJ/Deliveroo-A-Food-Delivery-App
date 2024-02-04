import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currRestaurant: {},
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action) => {
        state.currRestaurant = {...action.payload};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.currRestaurant;

export default restaurantSlice.reducer