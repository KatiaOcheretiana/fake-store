import { useSelector } from "react-redux";

import ProductList from "../components/ProductList";
import {
  selectIsLoading,
  selectProducts,
} from "../lib/redux/products/selectors";

export default function ProductsPage() {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="px-4 md:px-8 lg:px-20 xl:px-40 ">
      {products.length !== 0 && !isLoading ? (
        <ProductList products={products} />
      ) : (
        <p className="text-center text-gray-600">Products not found</p>
      )}
    </div>
  );
}
