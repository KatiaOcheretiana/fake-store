import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cleanCart } from "../lib/redux/cart/cartSlice";
import {
  selectCartProducts,
  selectTotalPrice,
} from "../lib/redux/cart/selectors";
import { AppDispatch } from "../lib/redux/store";

type Inputs = {
  name: string;
  number: string;
  email: string;
};

export default function OrderForm() {
  const dispatch: AppDispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const productInCart = useSelector(selectCartProducts);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const order = {
      customer: { ...data },
      products: productInCart.map((product) => ({
        id: product.id,
        amount: product.amount,
        price: product.price,
      })),
      totalPrice: totalPrice,
    };

    alert("Thank you for the order. See order data in console");
    console.log(order);

    dispatch(cleanCart());
    navigate("/");
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="p-6 shadow-lg shadow-card-500/50">
      <h2 className="font-extrabold text-xl text-center">
        To order, use the form below:
      </h2>
      <p className="text-secondary my-4">
        <span className="font-semibold">Total price:</span> {totalPrice} $
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <label className="flex flex-col gap-1 font-semibold text-sm relative">
          Full name:
          <input
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            className="border p-2 rounded w-full md:w-auto"
          />
          {errors.name && (
            <p
              role="alert"
              className="text-red-500 text-xs font-thin absolute -bottom-1/4 left-0 "
            >
              {errors.name.message}
            </p>
          )}
        </label>

        <label className="flex flex-col gap-1 font-semibold text-sm relative">
          Email:
          <input
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Enter a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            className="border p-2 rounded w-full md:w-auto"
          />
          {errors.email && (
            <p
              role="alert"
              className="text-red-500 text-xs font-thin absolute -bottom-1/4 left-0 "
            >
              {errors.email.message}
            </p>
          )}
        </label>

        <label className="flex flex-col gap-1 font-semibold text-sm relative">
          Phone number:
          <input
            {...register("number", {
              required: "Phone number is required",
              pattern: {
                value: /^(\+380-\d{2}-\d{3}-\d{2}-\d{2}|0\d{9})$/,
                message: "+380-XX-XXX-XX-XX or 0XXXXXXXXX",
              },
            })}
            aria-invalid={errors.number ? "true" : "false"}
            className="border p-2 rounded w-full md:w-auto"
          />
          {errors.number && (
            <p
              role="alert"
              className="text-red-500 text-xs font-thin absolute -bottom-1/4 left-0 "
            >
              {errors.number.message}
            </p>
          )}
        </label>

        <button type="submit" className="btn btn-add cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
