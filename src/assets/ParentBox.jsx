/* eslint-disable react/prop-types */
import { useState } from "react";
import RedBox from "./RedBox";

export default function ParentBox({ children }) {
  const [, setCount] = useState(0);
  console.log("rerender parent box");
  return (
    <div>
      {children}
      <RedBox />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
       Parent render
      </button>
    </div>
  );
}
