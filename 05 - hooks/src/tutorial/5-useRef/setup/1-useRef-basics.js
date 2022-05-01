import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const refDivContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(refDivContainer.current);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="test" ref={refContainer} />
          <button className="button" type="submit">
            submit
          </button>
        </div>
      </form>
      <div ref={refDivContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
