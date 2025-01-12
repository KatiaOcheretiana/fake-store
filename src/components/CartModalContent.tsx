import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  decreaceAmount,
  deleteFromCart,
  increaceAmount,
} from "../lib/redux/cart/cartSlice";
import {
  selectCartProducts,
  selectTotalPrice,
} from "../lib/redux/cart/selectors";
import { AppDispatch } from "../lib/redux/store";

export default function CartModalContent() {
  const dispatch: AppDispatch = useDispatch();

  const productInCart = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-semibold">Cart</h2>

      {productInCart.length !== 0 ? (
        <>
          <p className="text-lg font-semibold">
            <span>Total price:</span> {totalPrice} $
          </p>
          <ul className="space-y-4 max-h-72 overflow-y-auto">
            {productInCart.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-medium">{product.title}</p>
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

          <Link
            to="/order"
            className="btn btn-add mt-4 text-center w-full py-2"
          >
            Move to order
          </Link>
        </>
      ) : (
        <p className="text-gray-500">The cart is empty.</p>
      )}
    </div>
  );
}
