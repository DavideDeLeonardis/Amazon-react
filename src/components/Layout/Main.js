import { Route, Routes, Navigate } from "react-router-dom";

import Nav from "./MainNavbar";
import AllProducts from "../../pages/AllProducts";
import ProductDetails from "../../pages/ProductDetails";

const Main = () => {
   return (
      <main>
         <Nav />
         <Routes>
            <Route path="/" element={<Navigate replace to="/products" />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="products/:productId" element={<ProductDetails />} />
         </Routes>
      </main>
   );
};

export default Main;
