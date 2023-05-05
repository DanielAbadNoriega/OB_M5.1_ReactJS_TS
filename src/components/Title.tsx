import React from "react";

function Title({ title }: { title: string }): JSX.Element {
  return <h1 className="text-xl text-slate-700 text-left">{title} </h1>;
}

export default Title;
