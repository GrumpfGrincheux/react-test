import "./navMenu.scss";
import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <nav className="nav-menu">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <div className="nav-link__separator" />
      <NavLink className="nav-link" to="/quote">
        Quotes
      </NavLink>

      <div className="nav-link__separator" />
      <NavLink className="nav-link" to="/counter">
        Counter
      </NavLink>

      <div className="nav-link__separator" />
      <NavLink className="nav-link" to="/hello">
        Hello
      </NavLink>
    </nav>
  );
}
