import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setisLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
