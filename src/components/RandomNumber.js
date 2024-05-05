import { useState } from "react";
import generateRandomNumber from "../utils/generateRandomNumber";
function RandomNumber({ maxNum }) {
  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(maxNum)
  );
  const changeRandomNum = () => {
    setRandomNumber(generateRandomNumber(maxNum));
  };

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNum}>Generate New Random Number</button>
    </div>
  );
}

export default RandomNumber;
