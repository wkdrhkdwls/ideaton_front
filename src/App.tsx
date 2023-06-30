import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";
import Payment from "@pages/Payment";
const Home = loadable(() => import("@pages/Home"));
const LogIn = loadable(() => import("@pages/LogIn"));
const SignUp = loadable(() => import("@pages/SignUp"));
const Product = loadable(() => import("@pages/Product"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pay" element={<Payment />} />
    </Routes>
  );
}

export default App;
