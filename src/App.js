import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, ShopPage } from "./pages/";
import HeaderLayout from "./layouts/HeaderLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <HeaderLayout>
            <HomePage />
          </HeaderLayout>
          } 
        />
        <Route path="/shop" element={
          <HeaderLayout>
            <ShopPage />      
          </HeaderLayout>
          }
         />
         <Route path="/product/:id" element={
          <HeaderLayout>
            <ProductPage />      
          </HeaderLayout>
          }
          />
      </Routes>
    </Router>
  );
}

export default App;
