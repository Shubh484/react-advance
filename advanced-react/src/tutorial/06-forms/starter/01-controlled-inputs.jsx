const ControlledInputs = () => {
  return (
    <>
      <form className="form">
        <h4>controlled Inputs</h4>
        <div className="form-row">
          <lable htmlfor="name" className="form-lable">
            name
          </lable>
          <input type="text" name="" id="name" className="form-input" />
        </div>
        <div className="form-row">
          <lable htmlfor="email" className="form-lable">
            email
          </lable>
          <input type="email" name="" id="email" className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </>
  );
};
export default ControlledInputs;
