import UserContext from "../context/UserContext";
import { useContext } from "react";
function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e) => changeUserName(e.target.value)}
      />
      <button onClick={() => changeUserName("Bogdan")}>Reset</button>
    </>
  );
}

export default ChangeUser;
