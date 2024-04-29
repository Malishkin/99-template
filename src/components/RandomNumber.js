import { useState } from "react";
import generateRandomNumber from "../utils/generateRandomNumber";
function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const changeRandomNum = () => {
    setRandomNumber(generateRandomNumber());
  };

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNum}>Generate New Random Number</button>
    </div>
  );
}

export default RandomNumber;
