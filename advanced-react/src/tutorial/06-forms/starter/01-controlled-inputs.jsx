import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name, email);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled Inputs</h4>
        <div className="form-row">
          <lable htmlfor="name" className="form-label">
            name
          </lable>
          <input
            type="text"
            name=""
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <lable htmlfor="email" className="form-label">
            email
          </lable>
          <input
            type="email"
            name=""
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </>
  );
};
export default ControlledInputs;
