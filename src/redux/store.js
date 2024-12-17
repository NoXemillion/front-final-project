import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
    reducer: {
      products: productsReducer, // Продукты должны быть доступны через state.products
      filters: filtersReducer
    },
  });
  

export default store;