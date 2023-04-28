import { useParams, useNavigate } from "react-router-dom";
import { IProduct } from "../models";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "../hooks/useProduct";
import { Loader } from "../components/Loader";

export const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading } = useProduct();

  const fetchSingleProduct = async () => {
    const response = await axios.get<IProduct>(
      `https://fakestoreapi.com/products/${id}`
    );

    setProduct(response.data);
  };

  useEffect(() => {
    fetchSingleProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="container mx-auto max-w-6xl px-4 mb-10">
        <button
          onClick={() => navigate(-1)}
          className="text-4xl text-gray-400 transition duration-200 hover:text-yellow-400"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 place-items-center">
          <div className="bg-white flex justify-center items-center w-full md:w-2/3 border p-5">
            <img src={product?.image} alt={product?.title} className="w-3/4" />
          </div>
          <div className="border border-yellow-400 p-5">
            <h2 className="text-xl font-semibold mb-4">{product?.title}</h2>
            <p className="text-start text-base">{product?.description}</p>
            <p className="my-5 font-bold text-2xl">${product?.price}</p>
            <p className="text-sm font-semibold">
              Rating: {product?.rating.rate} / 5
            </p>
            <p className="mb-5">Count: {product?.rating.count}</p>

            <button className="py-2 px-4 text-center bg-yellow-400 text-black">
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
