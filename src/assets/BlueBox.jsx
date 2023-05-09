import { blueStyle } from "../App";

export default function BlueBox() {
  console.log("rerender blue box");
  return <div style={blueStyle}></div>;
}
