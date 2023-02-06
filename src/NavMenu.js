import "./navMenu.scss";
import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <nav className="nav-menu">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/quote">
        Quotes
      </NavLink>

      <NavLink className="nav-link" to="/counter">
        Counter
      </NavLink>

      <NavLink className="nav-link" to="/hello">
        Hello
      </NavLink>
    </nav>
  );
}
