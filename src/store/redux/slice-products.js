
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        filteredList: [],
        sliderValues: [],
        activeFilter: [],
        activeFilters: [],

    },
    reducers: {
        displayProducts(state, action) {

            state.items = action.payload;
            state.filteredList = action.payload;
        },
        sliderDefault(state, action) {

            state.sliderValues = action.payload;
        },
        sliderFilter(state, action) {
            state.filteredList = state.items.filter((item) => { return parseInt(item.price) >= action.payload[0] && parseInt(item.price) <= action.payload[1] })

        },
        filterApplied(state, action) {

            if (!state.activeFilter.includes(action.payload.filter)) {
                state.activeFilter.push(action.payload.filter)
            }
            state.filteredList = state.items.filter((item) => {
                if (Array.from(state.activeFilter).some(i => Object.values(item).includes(i))) {
                    return true
                }
                return false
            })
        },
        removeFilter(state, action) {
            const prodIndex = state.activeFilter.findIndex(item => item === action.payload.filter);
            state.activeFilter = state.activeFilter.filter((item) => {
                return item != state.activeFilter[prodIndex]
            });
            state.filteredList = state.items.filter((item) => {
                if (Array.from(state.activeFilter).some(i => Object.values(item).includes(i))) {
                    return true
                }
                return false
            })
        }


    },
});

export const productsActions = productsSlice.actions;

export default productsSlice;

