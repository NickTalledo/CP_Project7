import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="sidenav">
      <Link to="/home" className="nav-link">
        Home{" "}
      </Link>
      <Link to="/create" className="nav-link">
        Create
      </Link>
      <Link to="/gallery" className="nav-link">
        Gallery
      </Link>
      <img
        src="https://cdn.icon-icons.com/icons2/318/PNG/512/Darth-Vader-icon_34501.png"
        alt="icon"
        height={100}
        className="icon"
      />
    </div>
  );
};
export default Nav;
