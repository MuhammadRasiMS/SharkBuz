import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationIcon from '../../assets/icons/bell.svg';
import Plane from "../../assets/icons/plane.svg";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search anything..." />
        </div>
        <div className="navbar-right">
          <div className="icon">
            <img src={NotificationIcon} alt="notification" />
          </div>
          <div className="icon">
            <img src={Plane} alt="messages" className="" />
          </div>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", outline: "none", color: "inherit" }}
          >
            <div className="icon">
              <PersonIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
