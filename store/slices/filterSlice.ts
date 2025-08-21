import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    search: string;
    label: string;
    sortBy: "none" | "dateAsc" | "dateDesc";
}

const initialState: FiltersState = {
    search: "",
    label: "",
    sortBy: "none",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setLabel(state, action: PayloadAction<string>) {
          state.label = action.payload;
        },
        setSortBy(state, action: PayloadAction<FiltersState["sortBy"]>) {
          state.sortBy = action.payload;
        },
        resetFilters() {
            return initialState;
        },
    },
});

export const { setSearch, setLabel, setSortBy, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
