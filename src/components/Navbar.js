import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
import icon from '../icons/icon.png';

const Navbar = () => (
  <>
    <div className="navBox">
      <div className="navleft">
        <img className="page-logo" src={icon} alt="page-logo" />
        <h1>Space Travelers&rsquo; Hub</h1>
      </div>
      <div className="navright">
        <ul className="navs">
          <li><NavLink className="navLink" to="/">Rockets</NavLink></li>
          <li><NavLink className="navLink" to="/Missions">Missions</NavLink></li>
          <li className="navLink line">|</li>
          <li><NavLink className="navLink profile" to="/Profile">Profile</NavLink></li>
        </ul>
      </div>
    </div>
    <hr />
  </>
);

export default Navbar;
