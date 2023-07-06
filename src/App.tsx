import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

// import Layout from "@components/Layout/layout";

const Home = loadable(() => import("@pages/Home"));
const LogIn = loadable(() => import("@pages/LogIn"));
const SignUp = loadable(() => import("@pages/SignUp"));
const Product = loadable(() => import("@pages/Product"));
const Auth = loadable(() => import("@pages/Auth"));
const ProductDetail = loadable(() => import("@pages/ProductDetail"));
const Payment = loadable(() => import("@pages/Payment"));
const MonthMaterial = loadable(() => import("@pages/Month"));

function App() {
  return (
    // <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/pay" element={<Payment />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/material" element={<MonthMaterial />} />
    </Routes>
    // </Layout>
  );
}

export default App;
