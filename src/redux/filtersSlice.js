// filtersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchBrands = createAsyncThunk(
  'filters/fetchBrands',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('CatalogBrand/GetCatalogBrands');
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching brands:', error.message);
      return rejectWithValue(error.response?.data || 'Failed to fetch brands');
    }
  }
);


export const fetchTypes = createAsyncThunk(
  'filters/fetchTypes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/CatalogType/GetCatalogTypes');
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching types:', error.message);
      return rejectWithValue(error.response?.data || 'Failed to fetch types');
    }
  }
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brands: [],
    types: [],
    selectedBrands: [],
    selectedTypes: [],
    priceRange: [0, 1000],
  },
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSelectedBrands: (state, action) => {
      state.selectedBrands = action.payload;
    },
    setSelectedTypes: (state, action) => {
      state.selectedTypes = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload; 
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(fetchTypes.fulfilled, (state, action) => { 
        state.types = action.payload;
      });

  },
  
});


export const { setPriceRange, setSelectedBrands, setSelectedTypes } = filtersSlice.actions;

export default filtersSlice.reducer;