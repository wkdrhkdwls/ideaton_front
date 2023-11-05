import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const Home = loadable(() => import("@pages/Home"));
const CmProductPage = loadable(() => import("@pages/Product/cmProduct"));
const CmProductDetail = loadable(
  () => import("@pages/ProductDetail/cmProductDetail")
);
const CbProductPage = loadable(() => import("@pages/Product/cbProduct"));
const CbProductDetail = loadable(
  () => import("@pages/ProductDetail/cbProductDetail")
);
const CsProductPage = loadable(() => import("@pages/Product/csProduct"));
const CsProductDetail = loadable(
  () => import("@pages/ProductDetail/csProductDetail")
);

const Payment = loadable(() => import("@pages/Payment"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cmproduct" element={<CmProductPage />} />
      <Route path="/cmproduct/:id" element={<CmProductDetail />} />
      <Route path="/cbproduct" element={<CbProductPage />} />
      <Route path="/cbproduct/:id" element={<CbProductDetail />} />
      <Route path="/csproduct" element={<CsProductPage />} />
      <Route path="/csproduct/:id" element={<CsProductDetail />} />
      <Route path="/pay" element={<Payment />} />
    </Routes>
  );
}

export default App;
