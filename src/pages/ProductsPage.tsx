import { useSelector } from "react-redux";

import { useMemo, useState } from "react";

import Filter from "../components/Filter";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import {
  selectCategories,
  selectIsLoading,
  selectProducts,
} from "../lib/redux/products/selectors";

export default function ProductsPage() {
  const [searchedText, setSearchedText] = useState<string>("");
  const [searchedCategory, setSearchedCategory] = useState<string>("");

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const categories = useSelector(selectCategories);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesText = product.title
        .toLowerCase()
        .includes(searchedText.toLowerCase());
      const matchesCategory =
        !searchedCategory || product.category === searchedCategory;

      return matchesText && matchesCategory;
    });
  }, [products, searchedText, searchedCategory]);

  return (
    <div className="px-4 md:px-8 lg:px-20 xl:px-40 py-20">
      {isLoading ? (
        <Loader />
      ) : products.length !== 0 ? (
        <>
          <div className="mb-4">
            <Filter
              categories={categories}
              setSearchedText={setSearchedText}
              setSearchedCategory={setSearchedCategory}
              searchedText={searchedText}
              searchedCategory={searchedCategory}
            />
          </div>
          <ProductList products={filteredProducts} />
        </>
      ) : (
        <p className="text-center text-gray-600">Products not found</p>
      )}
    </div>
  );
}
