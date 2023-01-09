import { useState } from "react";

const LeftRIght = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const handleLeft = () => {
    setLeft(left + 1);
  };

  const handleRight = () => {
    setRight(right + 1);
  };

  const history = [];
  for (let i = 0; i < left; i++) {
    history.push("L , ");
  }
  for (let i = 0; i < right; i++) {
    history.push("R , ");
  }

  return (
    <>
      {left}
      <button onClick={handleLeft} id="left">
        Left
      </button>
      <button onClick={handleRight}>Right</button>
      {right}
      {/* History */}
      Button Press History :{history}
    </>
  );
};

export default LeftRIght;
