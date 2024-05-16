import UserContext from "../context/UserContext";
import { useContext } from "react";

function UserInfo() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>{user.user}</h1>
    </>
  );
}

export default UserInfo;
