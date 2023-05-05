import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

function Product({
  image,
  title,
  description,
  price,
}: ProductProps): JSX.Element {
  return (
    <div
      className="w-full border border-slate-100 p-4 rounded shadow-md flex flex-col items-center gap-2"
      style={{ maxWidth: "60vw" }}
    >
      <img src={image} alt={description} className="flex-grow sm:w-1/2"/>
      <hr className="w-full"></hr>
      <div className="w-full flex flex-col gap-2 items-start text-start">
        <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
        <p className="w-full text-md truncate font-light text-slate-400">
          {description}
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-md font-medium text-slate-700">{price}€</p>
        <button className="py-2 px-4 flex items-center gap-2 rounded shadow-md text-slate-50 font-semibold bg-emerald-500 hover:bg-emerald-600">
          <BsFillCartPlusFill className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Product;
