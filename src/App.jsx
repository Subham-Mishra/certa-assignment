import { useState, useRef, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [incrementing, setIncrementing] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (incrementing) {
      intervalRef.current = setInterval(
        () => setCount((prev) => prev + 1),
        1000
      );
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [incrementing]);

  const handleClick = () => setIncrementing((prev) => !prev);
  const handleReset = () => {
    setCount(0);
    setIncrementing(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>{incrementing ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
