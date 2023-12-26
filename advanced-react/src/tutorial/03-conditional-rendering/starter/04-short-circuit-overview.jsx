import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("susan");

  const codeExample = text || "hello world";

  return (
    <>
      {/* {if(someCondition){"won't work"}}  */}
      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy AND : {text && "hello world"}</h4>
      <h4>Truthy OR : {name || "hello world"}</h4>
      <h4>Truthy AND : {name && "hello world"}</h4>
      {codeExample}
    </>
  );

  return <h2>short circuit overview</h2>;
};
export default ShortCircuitOverview;
