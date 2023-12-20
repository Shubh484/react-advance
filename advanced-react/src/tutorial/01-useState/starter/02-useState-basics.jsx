import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("bob"));
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);

  const HandleClick = () => {
    setCount(count + 1);
    // setCount("pants");
  };

  return (
    <>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={HandleClick}>
        click me
      </button>
    </>
  );
};

export default UseStateBasics;
