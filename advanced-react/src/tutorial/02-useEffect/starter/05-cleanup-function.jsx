import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <>
      <div>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          toggle component
        </button>
        {toggle && <RandomComponent />}
      </div>
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log("hmm, this is interesting");
    const intId = setInterval(() => {
      // console.log("hello from interval");
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log("clean up");
    };
  }, []);
  return <h2>hello world</h2>;
};

export default CleanupFunction;
