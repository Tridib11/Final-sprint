import React, { useState, useCallback } from "react";

// Child only re-renders if props actually change
const Child = React.memo(({ onIncrement }) => {
  console.log("Child re-rendered ⚡");
  return <button onClick={onIncrement}>Increment</button>;
});

function Callback() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // ✅ useCallback ensures the same function reference
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <input
        placeholder="Type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Child onIncrement={handleIncrement} />
      <p>Count: {count}</p>
    </div>
  );
}

export default Callback
