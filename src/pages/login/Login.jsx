import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const fetchUsers = async () => {
    try {
      axios.get("auth/register").then((res) => {
        // console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("auth/login", {
        username,
        password,
      });
      const token = response.data.token;
      // alert("Login ");
      toast("Login completed!")
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="box">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hotel"
            />
          </div>

          <form className="lContainer" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="lInput"
            />

            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="lInput"
            />
            <button type="submit" className="lButton">
              Login
            </button>
            {/* {error && <span>{error.message}</span>} */}
          </form>
        </div>
      </div>
      <ToastContainer type={'success'}/>
    </>
  );
};

export default Login;
