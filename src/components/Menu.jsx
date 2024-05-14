import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
      >
        About
      </NavLink>
      <NavLink to="courses">Courses</NavLink>

      <NavLink
        to="contacts"
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
