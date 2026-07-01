import { BrowserRouter, Route, Routes } from "react-router-dom";

import {HomePage} from "../pages/HomePage"
import {ProductPage} from "../pages/ProductPagePage"
import {CartPage} from "../pages/CatologPagePage"
import {CatologPage} from "../pages/CatologPagePage"

export function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog" element={<CatologPage />} />

            
            </Routes>     
        </BrowserRouter>
    )
}
