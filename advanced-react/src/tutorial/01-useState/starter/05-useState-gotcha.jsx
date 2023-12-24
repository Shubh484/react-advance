import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // this is not synchronous
  // const handleClick = () => {
  //   setValue(value + 1);
  //   console.log(value);
  // };

  // If you want to update state immediately and synchronously, you can pass a function to setState

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
  };

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
