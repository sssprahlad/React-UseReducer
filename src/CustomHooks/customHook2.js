import CreateCustomHook from "./CreateCustomHook";

const CustomHook2 = () => {
  const [count, handleIncrease, handleDecrease, handleReset] =
    CreateCustomHook(10);

  return (
    <div>
      <h2>CustomHook2 count : {count}</h2>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CustomHook2;
