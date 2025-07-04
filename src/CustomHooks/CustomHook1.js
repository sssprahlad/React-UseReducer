import { useState } from "react";

const customHook1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

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

export default customHook1;
