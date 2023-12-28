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
    const someFunc = () => {
      // some condition
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h2>hello world</h2>;
};

export default CleanupFunction;
