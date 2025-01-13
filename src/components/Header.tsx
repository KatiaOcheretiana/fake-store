import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useScrollDirection from "../lib/hooks/useScrollDirection";
import { selectTotalAmount } from "../lib/redux/cart/selectors";
import CartIcon from "./Icons";

export default function Header({ openModal }: { openModal: () => void }) {
  const isVisible = useScrollDirection();

  const productCount = useSelector(selectTotalAmount);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50  shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }
      px-4  py-1.5 bg-blue-950     md:px-8 lg:px-20 xl:px-40  `}
    >
      <nav className="flex items-center justify-between">
        <Link
          to={"/"}
          className="text-lg font-bold text-gray-800 dark:text-gray-100"
        >
          My Store
        </Link>

        <button className="btn btn-cart" onClick={openModal}>
          {productCount !== 0 ? <div>{productCount}</div> : null}
          <CartIcon className="stroke-slate-500 hover:stroke-orange-500 transition-colors duration-300" />
        </button>
      </nav>
    </header>
  );
}
