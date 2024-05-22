import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const login = ()=>{
    localStorage.setItem("login", true)
    
  }

  const navigate = useNavigate();
  
  useEffect(() => {
    let login = localStorage.getItem("login")
        if (login) {
            navigate("/");
        }
    })

  return (
    <>
      <h1>Login Page</h1><br />
        <input type="text" name="" /><br />
        <input type="text" name="" /><br />
        <button onClick={login}>Submit</button>
    </>
  );
}

export default Login;
