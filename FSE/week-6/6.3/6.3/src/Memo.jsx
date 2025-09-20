import React, { useMemo, useState } from "react";

function Memo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(0);
  const multiplication = useMemo(
    function mutiply() {
      console.log("**********");
      return add * 100;
    },
    [add]
  );
  return (
    <div>
      <h1>Learning useMemo</h1>

      <br />
      {multiplication}
      <br />
      <button
        onClick={() => {
          setAdd((add) => add + 1);
        }}
      >
        Addition
      </button>
      <span>{add}</span>
      <br />
      <button
        onClick={() => {
          setMinus((minus) => minus - 1);
        }}
      >
        Substraction
      </button>
      <span>{minus}</span>
    </div>
  );
}

export default Memo;
