import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  function Clickfunction() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={Clickfunction}>Click Me</button>
    </div>
  );
}

export default Counter;