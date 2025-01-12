import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { lazy, useEffect } from "react";

import { Layout } from "./components/Layout";
import { getProducts } from "./lib/redux/products/operations";
import { AppDispatch } from "./lib/redux/store";

const ProductsPage = lazy(() => import("./pages/ProductsPage"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
