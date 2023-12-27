import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        toggle
      </button>
      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return (
    <>
      <div className="alert alert-danger">hello world</div>
    </>
  );
};

export default ToggleChallenge;
