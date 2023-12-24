import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // const handleClick = () => {
  //   setTimeout(() => {
  //     console.log("clicked the button");
  //     setValue(value + 1);
  //   }, 3000);
  // };

  // In the above function if a click button 'n' times within 3 seconds (or whatevere time you set) the value will not increase by 'n' times
  // for example - initially the value is zero and i clicked the button 5 times with 3 seconds it will only do '0+1' 5 times
  // As it uses the value right before we invoked the call back function

  // the solution for this is function approach

  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
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
