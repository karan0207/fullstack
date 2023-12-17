import axios from "axios";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  // const { loading, error, dispatch } = useContext(AuthContext);

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  //     navigate("/");
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const fetchUsers = async () => {
    try {
      axios.get("auth/register").then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("auth/register", { username, email, password })
      .then(() => {
        alert("Registration successfull");
        
        setUsername("");
        setEmail("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((err) => {
        console.log("Unable to register user");
      });
  };

  // const notify = () => toast("Registration completed!");
  

  return (
    <>
      <Navbar />
      <ToastContainer/>
      <div className="login">
      
        <div className="box">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hotel" />
          </div>

          <form className="lContainer" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
          onChange={(e) => setUsername(e.target.value)}
              className="lInput"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            <button
            type="submit"
              className="lButton"
            >
              Register
            </button>
            {/* {error && <span>{error.message}</span>} */}
          </form>
          
        </div>
       
      </div>
    </>
  );
};

export default Register;
