import { useDispatch } from "react-redux";

import {
  decreaceAmount,
  deleteFromCart,
  increaceAmount,
} from "../lib/redux/cart/cartSlice";
import { AppDispatch } from "../lib/redux/store";
import { ProductType } from "../lib/types/productType";

interface CartProductListPropsType {
  productInCart: ProductType[];
  page?: boolean;
}

export default function CartProductList({
  productInCart,
  page,
}: CartProductListPropsType) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul className={` ${page ? "" : "max-h-72"}  overflow-y-auto`}>
      {productInCart.map((product) => (
        <li
          key={product.id}
          className="flex justify-between items-center border-b p-4"
        >
          <div className="flex flex-col gap-2">
            <p className="font-bold">{product.title}</p>
            <div className="flex items-center gap-2">
              <button
                className="btn btn-light p-2"
                aria-label="Decrease quantity"
                onClick={() => {
                  if (product.amount === 1) {
                    dispatch(deleteFromCart(product.id));
                  } else {
                    dispatch(decreaceAmount(product.id));
                  }
                }}
              >
                -
              </button>
              <p className="w-8 text-center">{product.amount}</p>
              <button
                className="btn btn-add p-2"
                aria-label="Increase quantity"
                onClick={() => dispatch(increaceAmount(product.id))}
              >
                +
              </button>
            </div>
          </div>

          <img
            className="h-14 w-14 object-contain"
            src={product.images[0]}
            alt={product.title}
          />
        </li>
      ))}
    </ul>
  );
}
