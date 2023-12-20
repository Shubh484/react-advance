const ErrorExample = () => {
  let count = 0;

  const HandleOnClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={HandleOnClick}>
        Increase
      </button>
    </>
  );
};

export default ErrorExample;
