import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
import icon from '../icons/icon.png';

const Navbar = () => (
  <div className="navBox">
    <img className="page-logo" src={icon} alt="page-logo" />
    <ul className="navs">
      <li><NavLink className="navLink" to="/">Rockets</NavLink></li>
      <li><NavLink className="navLink" to="/Missions">Missions</NavLink></li>
      <li><NavLink className="navLink" to="/Profile">Profile</NavLink></li>
    </ul>

  </div>
);

export default Navbar;
