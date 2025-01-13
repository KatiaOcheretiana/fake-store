import { useSelector } from "react-redux";

import CartProductList from "../components/CartProductList";
import OrderForm from "../components/OrderForm";
import { selectCartProducts } from "../lib/redux/cart/selectors";

export default function OrderPage() {
  const productInCart = useSelector(selectCartProducts);

  return (
    <div className="px-4  md:px-8 lg:px-20 xl:px-40 py-20 grid md:grid-cols-2 md:grid-flow-dense md:gap-14  lg:gap-80 ">
      <div className="	mb-8 md:mb-0 md:order-2 h-auto">
        <OrderForm />
      </div>
      <div>
        <h2 className="font-extrabold text-xl text-center md:order-1">
          List of selected products:
        </h2>
        <CartProductList productInCart={productInCart} page />
      </div>
    </div>
  );
}
