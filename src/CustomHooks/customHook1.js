import CreateCustomHook from "./CreateCustomHook";
import { useState } from "react";

const CustomHook1 = () => {
  console.log(CreateCustomHook());
  const [count, handleIncrease, handleDecrease, handleReset] =
    CreateCustomHook();

  return (
    <div>
      <h2>CustomHook1 count : {count}</h2>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CustomHook1;
