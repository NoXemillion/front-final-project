
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";


export const fetchBrands = createAsyncThunk(
  "filters/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("CatalogBrand/GetCatalogBrands");
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching brands:", error.message);
      return rejectWithValue(error.response?.data || "Failed to fetch brands");
    }
  }
);


export const fetchTypes = createAsyncThunk(
  "filters/fetchTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/CatalogType/GetCatalogTypes");
      return response.data;
    } catch (error) {
      console.error("Error fetching types:", error.message);
      return rejectWithValue(error.response?.data || "Failed to fetch types");
    }
  }
);


const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brands: [],
    types: [],
    selectedBrands: [],
    selectedTypes: [],
    priceRange: [0, 1000],
    loading: false,
    error: null,
  },
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSelectedBrands: (state, action) => {
      // Пример правильного обновления массива
      const newBrands = action.payload;
      state.selectedBrands = [...newBrands]; // создаем новый массив
    },
    setSelectedTypes: (state, action) => {
      const newTypes = action.payload;
      state.selectedTypes = [...newTypes]; // создаем новый массив
    },
    
    resetFilters: (state) => {
      state.selectedBrands = [];
      state.selectedTypes = [];
      state.priceRange = [0, 1000];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.types = action.payload;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setPriceRange, setSelectedBrands, setSelectedTypes, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
