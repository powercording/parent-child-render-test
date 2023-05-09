import { redStyle } from "../App";

export default function RedBox() {
  console.log("rerender red box");
  return <div style={redStyle}></div>;
}
