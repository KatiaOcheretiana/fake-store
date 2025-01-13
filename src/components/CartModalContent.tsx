import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectCartProducts,
  selectTotalPrice,
} from "../lib/redux/cart/selectors";
import CartProductList from "./CartProductList";

interface CartModalContentPropsType {
  onClose: () => void;
}

export default function CartModalContent({
  onClose,
}: CartModalContentPropsType) {
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
          <CartProductList productInCart={productInCart} />
          <Link
            to="/order"
            onClick={onClose}
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
