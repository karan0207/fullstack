import { useContext, useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../../context/AuthContext.js";

const Navbar = () => {
  const [mobile, setMobile] = useState(true);
  const [openIcon, setOpenIcon] = useState(false);
  const { user } = useContext(AuthContext);

  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotelbooking</span>
        <div className="mobilenav">
          {openIcon ? (
            <div className="icon" onClick={() => setOpenIcon(false)}>
              <CloseIcon />
            </div>
          ) : (
            <div className="closeicon" onClick={() => setOpenIcon(true)}>
              {" "}
              <MenuIcon />
            </div>
          )}
        </div>
        {isUserSignedIn ? (
          <div className="logout">
            <button onClick={handleSignOut}>Logout</button>
          </div>
        ) : (
          <div className={"navItems"}>
            <Link to={"/register"}>
              <button className="navButton">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
        {openIcon ? (
          <div className="mobnavItems ">
            <div className="item">
              <a href="#header">
                
                <span>Home</span>
              </a>
            </div>
            <div className="item">
              <a href="#featured">
                
                <span>Property by Places</span>
              </a>
            </div>
            <div className="item">
              <a href="#fp">
                <span>Property List</span>
              </a>
            </div>
            <div className="item">
              <a href="#hotels">
                <span>Hotels</span>
              </a>
            </div>
            <div className="item">
              <a href="#mail">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
