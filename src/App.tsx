import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { lazy, useEffect } from "react";

import { Layout } from "./components/Layout";
import { getProducts } from "./lib/redux/products/operations";
import { AppDispatch } from "./lib/redux/store";

const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
