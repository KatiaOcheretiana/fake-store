import { Outlet } from "react-router-dom";

import { Suspense, useState } from "react";

import CartModalContent from "./CartModalContent";
import Header from "./Header";
import Loader from "./Loader";
import Modal from "./Modal";

export const Layout = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Header openModal={openModalHandler} />

      <Suspense fallback={<Loader />}>
        <Outlet />
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <CartModalContent onClose={() => setOpenModal(false)} />
        </Modal>
      </Suspense>
    </>
  );
};
