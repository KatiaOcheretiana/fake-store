import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-6 px-4  md:px-8 lg:px-20 xl:px-40 py-20  ">
      <h2 className="font-extrabold text-xl text-center">
        {" "}
        Oops! The page you’re looking for doesn’t exist.
      </h2>
      <img src="../../public/not-found.webp" />
      <Link
        to={"/"}
        className="btn btn-add w-60"
        aria-label="Move to home page"
      >
        Move to home page
      </Link>
    </div>
  );
}
