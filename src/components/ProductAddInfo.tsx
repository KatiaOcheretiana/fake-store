import { useDispatch, useSelector } from "react-redux";

import { addToCart, increaceAmount } from "../lib/redux/cart/cartSlice";
import { selectCartProducts } from "../lib/redux/cart/selectors";
import { AppDispatch } from "../lib/redux/store";
import { ProductType } from "../lib/types/productType";

interface ProductAddInfoPropType {
  product: ProductType;
  onClose: () => void;
}

export default function ProductAddInfo({
  product,
  onClose,
}: ProductAddInfoPropType) {
  const dispatch: AppDispatch = useDispatch();

  const productInCart = useSelector(selectCartProducts);

  const addProductToCart = (id: number) => {
    if (productInCart.some((product) => product.id === id)) {
      dispatch(increaceAmount(id));
    } else {
      dispatch(addToCart(id));
    }
  };

  return (
    <div className="flex flex-col gap-5">
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

      <div className="flex gap-4">
        <button
          className="btn btn-add w-full"
          onClick={() => addProductToCart(product.id)}
        >
          Add to cart
        </button>
        <button className="btn btn-light w-full" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
