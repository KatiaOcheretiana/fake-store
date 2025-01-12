import { ProductType } from "../lib/types/productType";

interface ProductCardPropsType {
  data: ProductType;
}

export default function ProductCard({ data }: ProductCardPropsType) {
  return (
    <li className="w-full bg-card p-4 border rounded border-slate-100			 shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        className="h-40 w-full object-contain mb-4 transform transition-transform duration-300 hover:scale-125"
        src={data.images[0]}
        alt={data.title}
      />
      <div className="flex flex-col flex-grow justify-around gap-2">
        <h2 className="text-md text-primary font-bold ">{data.title}</h2>
        <p className="text-secondary">
          <span className="font-bold">Category:</span> {data.category}
        </p>
        <p className="text-secondary">
          <span className="font-bold">Price:</span> {data.price} $
        </p>
      </div>
    </li>
  );
}
