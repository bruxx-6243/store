import { IProduct } from "../models";
import { Link } from "react-router-dom";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="border py-2 px-4 flex flex-col justify-between items-center mb-2 bg-white ">
      <img
        src={product.image}
        alt={product.title}
        className="w-1/2 object-cover"
      />
      <h2 className="text-sm">{product.title.substr(0, 18)}</h2>
      <p className="font-bold">${product.price}</p>
      <Link
        to={String(product.id)}
        className="w-full  py-2 px-4 text-center bg-yellow-400 text-black"
      >
        See Details
      </Link>
    </div>
  );
};
