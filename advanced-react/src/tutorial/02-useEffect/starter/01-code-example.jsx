import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello there");
    // be careful, you will have infinite loop, this is because every time we setValue, we re-render and this will make an infinite loop as the function be invoked with every re-render
    setValue(value + 1);
  };
  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
