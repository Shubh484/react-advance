import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

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
    console.log("hmm, this is interesting"); // this will load whenever you toggle, because we are displaying the component conditionally
  }, []);
  return <h2>hello world</h2>;
};

export default CleanupFunction;
