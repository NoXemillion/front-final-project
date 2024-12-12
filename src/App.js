import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ShopPage } from "./pages/";
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

      </Routes>
    </Router>
  );
}

export default App;
