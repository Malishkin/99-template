import { useState } from "react";
function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
    setData({ username: "", password: "" });
  }
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
