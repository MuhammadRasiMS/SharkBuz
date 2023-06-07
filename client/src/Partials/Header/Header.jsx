import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import NotificationIcon from '../../assets/icons/bell.svg';
import Plane from "../../assets/icons/plane.svg";

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
            <img src={Plane} alt="messages" className='' />
          </div>
          <div className="icon">
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
