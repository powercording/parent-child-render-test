import { useState } from "react";
import "./App.css";
import BlueBox from "./assets/BlueBox";
import ParentBox from "./assets/parentBox";

export const blueStyle = {
  backgroundColor: "blue",
  width: "50px",
  height: "50px",
};

export const redStyle = {
  ...blueStyle,
  backgroundColor: "red",
};

function App() {
  const [, setCount] = useState(0);
  return (
    <>
      <ParentBox>
        <BlueBox></BlueBox>
      </ParentBox>
      <button onClick={() => setCount((prev) => prev + 1)}>App render</button>
    </>
  );
}

export default App;
