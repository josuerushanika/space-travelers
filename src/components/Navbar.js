import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => (
  <div>
    <ul className="navs">
      <li><NavLink className="navLink" to="/">Rockets</NavLink></li>
      <li><NavLink className="navLink" to="/Missions">Missions</NavLink></li>
      <li><NavLink className="navLink" to="/Profile">Profile</NavLink></li>
    </ul>

  </div>
);

export default Navbar;
