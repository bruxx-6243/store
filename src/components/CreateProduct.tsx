import { SetStateAction, useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 3,
    count: 400,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter a valid title.");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    setValue("");
    onCreate(response.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:items-center flex-col md:flex-row">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          className="w-full border border-yellow-400 py-2 px-4 my-2 outline-none sm:rounded-none"
          placeholder="Enter product title ..."
        />
        <button
          type="submit"
          className="py-2 px-4 border border-yellow-400 bg-yellow-400 text-black font-semibold"
        >
          Create
        </button>
      </div>
      {error && <ErrorMessage error={error} />}
    </form>
  );
};
