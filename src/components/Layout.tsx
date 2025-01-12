import { Outlet } from "react-router-dom";

import { Suspense, useState } from "react";

import CartModalContent from "./CartModalContent";
import Header from "./Header";
import Modal from "./Modal";

export const Layout = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Header openModal={openModalHandler} />

      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <CartModalContent />
        </Modal>
      </Suspense>
    </>
  );
};
