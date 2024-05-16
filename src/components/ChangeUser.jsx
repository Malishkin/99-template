import UserContext from "../context/UserContext";
import { useContext } from "react";
function ChangeUser() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </>
  );
}

export default ChangeUser;
