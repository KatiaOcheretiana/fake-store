import { useState } from "react";

import { ProductType } from "../lib/types/productType";
import Modal from "./Modal";
import ProductAddInfo from "./ProductAddInfo";

interface ProductCardPropsType {
  data: ProductType;
}

export default function ProductCard({ data }: ProductCardPropsType) {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <li
        onClick={openModalHandler}
        className="w-full bg-card p-4 border rounded border-slate-100 shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <img
          className="h-40 w-full object-contain mb-4 transform transition-transform duration-300 hover:scale-125"
          src={data.images[0]}
          alt={data.title}
        />
        <div className="flex flex-col flex-grow justify-around gap-2">
          <h2 className="text-md text-primary font-bold">{data.title}</h2>
          <p className="text-secondary">
            <span className="font-bold">Category:</span> {data.category}
          </p>
          <p className="text-secondary">
            <span className="font-bold">Price:</span> {data.price} $
          </p>
        </div>
      </li>

      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <div className="flex flex-col gap-5 ">
            <ProductAddInfo product={data} />
            <div className="flex gap-4">
              <button className="btn btn-add w-full">Add to cart</button>
              <button
                className="btn btn-light w-full"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
