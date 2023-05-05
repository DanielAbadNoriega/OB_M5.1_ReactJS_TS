import React from "react";
import { BsFillCartFill } from "react-icons/bs";

interface HeaderProps {
  name: string;
}

function Header({ name }: HeaderProps): JSX.Element {
  return (
    <div className="h-20 py-2 px-4 bg-slate-100 flex items-center justify-between">
      <h1 className="text-pink-500 font-semibold text-xl flex items-center gap-2">
        <BsFillCartFill className="text-3xl"/>
        {name}
      </h1>
      <button className="py-2 px-4 text-slate-50 bg-pink-400 rounded shadow-md hover:bg-pink-500">
        Login
      </button>
    </div>
  );
}

export default Header;
