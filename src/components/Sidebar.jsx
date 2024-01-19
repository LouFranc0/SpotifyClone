import { Button, Form, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/sidebar.css";
import logo from "../assets/logo/Spotify_Logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSearchAction } from "../redux/actions";

const Sidebar = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveSearchAction(query));
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="Logo" className="logo-img" />

        <div className="sidebar-items">
          <Link to="/" className="sidebar-item">
            Home
          </Link>
          <Link to="/" className="sidebar-item">
            Your Library
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            value={query}
            onChange={handleChange}
            placeholder="Search for artist"
            className="search-bar"
          />

          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>
      </div>
      <div>
        <div className="login-btns">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
        <div className="policies">
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
