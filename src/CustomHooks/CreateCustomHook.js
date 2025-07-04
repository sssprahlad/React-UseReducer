import { useState } from "react";

const CreateCustomHook = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialCount);
  };

  return [count, handleIncrease, handleDecrease, handleReset];
};

export default CreateCustomHook;
