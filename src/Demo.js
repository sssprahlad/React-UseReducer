import { useState } from "react";
import About from "./About";

const Demo = () => {
  const [text, setText] = useState("parent");

  const updateText = (getText) => {
    setText(getText);
  };

  return (
    <div>
      <h1>Parent container </h1>
      <p>{text}</p>
      <About update={updateText} />
    </div>
  );
};

export default Demo;
