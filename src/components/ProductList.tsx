import { ProductType } from "../lib/types/productType";
import ProductCard from "./ProductCard";

interface ProductListPropType {
  products: ProductType[];
}

export default function ProductList({ products }: ProductListPropType) {
  return (
    <ul className="grid gap-4 sm:grid-cols-1 smm:grid-cols-2 md:grid-cols-3  md:gap-6 lg:grid-cols-4  xl:grid-cols-5">
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </ul>
  );
}
