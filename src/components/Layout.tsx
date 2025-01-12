import { Outlet } from "react-router-dom";

import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <div>Cart</div>

      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
