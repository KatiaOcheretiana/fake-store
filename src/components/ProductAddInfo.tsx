import { ProductType } from "../lib/types/productType";

interface ProductAddInfoPropType {
  product: ProductType;
}

export default function ProductAddInfo({ product }: ProductAddInfoPropType) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold  text-center">{product.title}</h2>
      <img
        className="sm:h-36  md:h-48 lg:h-60 w-full object-contain "
        src={product.images[0]}
        alt={product.title}
      />
      <p className=" text-gray-700">{product.description}</p>
      <p className=" text-gray-700">
        <span className="font-bold">Rating:</span> {product.rating}
      </p>

      <p>
        <span className="font-bold">Category:</span> {product.category}
      </p>
      <p>
        <span className="font-bold">Price:</span> {product.price} $
      </p>
    </div>
  );
}
