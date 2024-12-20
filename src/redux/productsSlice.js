import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/CatalogItem/GetCatalogItems');
        console.log('API Response:', response.data);
        return response.data;        
    } catch (error) {
        console.error('API Error:', error);
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});


export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id, { rejectWithValue }) => {
    try {
        const response = await api.get(`/CatalogItem/GetCatalogItemById/${id}`);
        console.log('API Response:', response.data);
        return response.data;        
    } catch (error) {
        console.error('API Error:', error);
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
})


const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products: [],
        product : {},
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload; // Проверьте, соответствует ли action.payload ожидаемой структуре
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Error fetching products';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.product = action.payload; // Проверьте, соответствует ли action.payload ожидаемой структуре
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.error = action.payload || 'Error fetching product';
            });

    },
    
})

export default productsSlice.reducer;